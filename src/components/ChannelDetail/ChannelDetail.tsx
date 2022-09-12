import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetch";
import { ChannelDetailsProps, VideoProps } from "../../utils/types";
import { VideoFeed } from "../Feed/VideoFeed";
import { ChannelItem } from "./ChannelItem";

type Props = {};

export const ChannelDetail: FC<Props> = (props) => {
  const { id } = useParams();
  const [data, setData] = useState<VideoProps[]>([]);
  const [channelDetails, setChannelDetails] = useState<ChannelDetailsProps>();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetails(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setData(videosData?.items);
    };

    fetchResults();
  }, [id]);

  console.log(channelDetails, data);

  return (
    <Box minHeight={"100vh"}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "calc((100vw - 120px)/6.2 - 1px)",
          zIndex: 10,
          background: channelDetails?.brandingSettings.image.bannerExternalUrl
            ? `url(${channelDetails?.brandingSettings.image.bannerExternalUrl}) center center no-repeat`
            : "#141414",
          backgroundSize: "cover",
        }}
      />

      <Box p={4}>
        <VideoFeed data={data} />
      </Box>
    </Box>
  );
};
