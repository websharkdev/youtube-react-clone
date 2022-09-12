import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { demoChannelUrl, demoVideoUrl } from "../../../utils/constants";
import { VideoProps } from "../../../utils/types";

type Props = {
  data: VideoProps;
  id: string;
};

export const VideoItem: FC<Props> = ({ data, id }) => {
  return (
    <Card sx={{ width: "100%" }} data-id={id}>
      <Link to={id ? `/video/${id}` : demoVideoUrl} data-id={id}>
        <CardMedia
          image={data?.snippet.thumbnails?.high?.url}
          alt={data?.snippet.title}
          component="img"
          sx={{ width: "100%", minWidth: 320, height: 180 }}
        />
      </Link>

      <CardContent
        sx={{ background: "#1e1e1e", height: "100%", minHeight: "106px" }}
      >
        <Grid container wrap="nowrap" direction="column">
          <Grid item>
            <Link to={id ? `/video/${id}` : demoVideoUrl} data-id={id}>
              <Typography variant="button" color="white">
                {data.snippet.title.slice(0, 60)}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              to={
                data.snippet.channelId
                  ? `/channel/${data.snippet.channelId}`
                  : demoChannelUrl
              }
              data-id={id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  {data.snippet.channelTitle.slice(0, 60)}
                </Typography>
                <CheckCircle sx={{ fontSize: 12, ml: 1, color: "gray" }} />
              </Box>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
