import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import theme from "../../../globals/theme";
import YoutubePlayer from "react-native-youtube-iframe";
import VideoPlayer from "expo-video-player";
import { Video } from "expo-av";

const MyVideoPlayer = ({ urlLesson }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playingUrl, setPlayingUrl] = useState(``);

  const getYoutubeId = (url) => {
    var newUrl = ``;
    var videoId = ``;
    if ((newUrl = url.match(/(\?|&)v=([^&#]+)/))) {
      videoId = newUrl.pop();
    } else if ((newUrl = url.match(/(\.be\/)+([^\/]+)/))) {
      videoId = newUrl.pop();
    } else if ((newUrl = url.match(/(\embed\/)+([^\/]+)/))) {
      videoId = newUrl.pop().replace("?rel=0", "");
    }
    return videoId;
  };
  const setPlayingVideo = (url) => {
    const youtubeDomain = `youtube.com`;
    if (url) {
      setIsLoading(false);
      if (url.includes(youtubeDomain)) {
        setIsYoutube(true);
        const videoId = getYoutubeId(url);
        setPlayingUrl(videoId);
      } else {
        setIsYoutube(false);
        setPlayingUrl(url);
      }
    }
  };

  useEffect(() => {
    setPlayingVideo(urlLesson);
  }, [urlLesson]);

  return (
    <>
      {isLoading ? (
        <View style={styles.container}></View>
      ) : (
        <View>
          {isYoutube ? (
            <YoutubePlayer
              ref={playerRef}
              height={250}
              play={playing}
              videoId={playingUrl}
              onError={(error) => console.log(error)}
              playbackRate={1}
            />
          ) : (
            <VideoPlayer
              videoProps={{
                shouldPlay: false,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: {
                  uri: `${playingUrl}`,
                },
              }}
              inFullscreen={false}
              height={250}
              sliderColor={theme.BASIC_BLUE}
            />
          )}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: theme.RADIUS_BTN_BGR,
  },
});

export default MyVideoPlayer;
