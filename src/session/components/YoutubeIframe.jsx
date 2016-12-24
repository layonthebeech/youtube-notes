import React from 'react';
import Youtube from 'react-youtube';

function YoutubeIframe(props) {
  console.log(props);
  return (
    <Youtube videoId={props.video} />
  );
}

export default YoutubeIframe;
