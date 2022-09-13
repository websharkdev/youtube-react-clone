import { Box, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetch";
import { VideoProps } from "../../utils/types";
import { Sidebar } from "./Sidebar";
import { VideoFeed } from "./VideoFeed";

type Props = {};

export const Feed: FC<Props> = (props) => {
  const thisYear = new Date().getFullYear();

  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    window.localStorage.getItem("selectedCategory") || "New"
  );

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory.toLocaleLowerCase()}`
    ).then((data) => setVideos(data.items));

    window.localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      sx={{ height: "calc(100vh - 88px)" }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "100%" },
          borderRight: "1px solid #3d3d3d",

          width: { md: "20%", xs: "auto" },
          p: { sm: 0, md: 3 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          variant="body2"
          className="copyright"
          sx={{
            color: "#d3d3d3",
            mt: 7,
            width: "100%",
            display: { xs: "none", md: "flex" },
          }}
        >
          Copyright {thisYear}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#d3d3d3",
            mt: 1,
            width: "100%",
            display: { xs: "none", md: "flex" },
          }}
        >
          @webshark.dev
        </Typography>
      </Box>

      <Box
        sx={{
          height: { sm: "auto", md: "100vh" },
          p: { sm: 0, md: 3 },
          mt: { xs: 3, md: 0 },
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          mb={2}
          fontWeight={"bold"}
          sx={{ color: "red" }}
        >
          <span style={{ color: "#fff" }}>{selectedCategory}</span> video
        </Typography>

        <VideoFeed data={videos} />
      </Box>
    </Stack>
  );
};
