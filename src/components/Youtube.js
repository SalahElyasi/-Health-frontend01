import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
  render() {
    const opts = {
      height: "160",
      width: "240",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.VideoOnReady} />
    );
  }
}

export default Youtube;
