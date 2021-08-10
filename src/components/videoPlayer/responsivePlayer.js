import React, {useState} from "react";
import ReactPlayer from "react-player";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {colorPrimary} from "../../core/constants";

const ResponsivePlayer = ({url}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {url === "" || url === undefined ? null : (
        <Loader className="player__loading" type="Oval" color={colorPrimary} width={45} visible={isLoading} />
      )}
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        muted={true}
        onReady={() => setIsLoading(false)}
      />
    </>
  );
};

export default ResponsivePlayer;
