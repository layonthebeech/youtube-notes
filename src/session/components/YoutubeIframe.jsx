import React from 'react';
import Youtube from 'react-youtube';
import ScreenshotButton from './ScreenshotButton';

function YoutubeIframe(props) {
  return (
    <div className="col-md-6">
      <div id="youtubePlayer">
        <Youtube videoId={props.videoId} />
      </div>
      <ScreenshotButton addScreenshot={props.addScreenshot} />
    </div>
  );
}

export default YoutubeIframe;
