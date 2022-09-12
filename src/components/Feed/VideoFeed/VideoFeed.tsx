import { Box, Grid } from "@mui/material";
import { FC, Fragment } from "react";
import { VideoProps } from "../../../utils/types";
import { ChannelItem } from "../../ChannelDetail/ChannelItem";
import { VideoItem } from "./VideoItem";
import { VideoPlaylist } from "./VideoPlaylist";

type Props = {
  data: VideoProps[];
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
};

export const VideoFeed: FC<Props> = ({ data, direction = "row" }) => {
  return (
    <Box
      sx={{
        overflowY: "auto",
        flex: 2,
        height: "100%",
      }}
    >
      <Grid
        container
        wrap="wrap"
        alignItems="center"
        width="100%"
        direction={direction}
        rowSpacing={3}
        columnSpacing={2}
      >
        {data.map((item: VideoProps, index: number) => (
          <Fragment key={index}>
            {item && item.id && (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                {item.id.videoId && (
                  <VideoItem id={item.id.videoId} data={item} />
                )}

                {item.id.playlistId && (
                  <VideoPlaylist id={item.id.playlistId} data={item} />
                )}

                {item.id.channelId && (
                  <ChannelItem id={item.id?.channelId} data={item} />
                )}
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </Box>
  );
};
