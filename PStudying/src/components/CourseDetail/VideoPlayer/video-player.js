import React, { useRef, useState, useCallback } from "react";
import { View, StyleSheet, Button } from "react-native";
import theme from "../../../globals/theme";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPlayer = ({urlLesson}) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isYoutube, setIsYoutube] = useState(true);
  
  return (
    <View>
        {isYoutube ? <YoutubePlayer
      ref={playerRef}
        height={250}
        play={playing}
        videoId={"AHLNzv13c2I"}
        onError={(error) => console.log(error)}
        playbackRate={1}
      /> : <YoutubePlayer
      ref={playerRef}
        height={250}
        play={playing}
        videoId={"iee2TATGMyI"}
        onError={(error) => console.log(error)}
        playbackRate={1}
      />}
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: theme.RADIUS_BTN_BGR,
  },
});

export default VideoPlayer;
