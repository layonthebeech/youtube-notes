import React, { PropTypes } from 'react';

class ScreenshotButton extends React.Component {
  constructor(props) {
    super(props);
    this.takeScreenshot = this.takeScreenshot.bind(this);
  }
  takeScreenshot() {
    chrome.tabs.captureVisibleTab(function (screenshotUrl) {
      var youtubeElement = document.getElementById('youtubePlayer');
      var youtubeElementCoordinates = youtubeElement.getBoundingClientRect();
      //this.setState({ screenshotUrl: screenshotUrl })
      console.log(youtubeElementCoordinates);
      console.log('this', this)
      this.props.addScreenshot(screenshotUrl)
    }.bind(this));
  }
  render() {
    return (
      <button onClick={this.takeScreenshot}>
        <i className="fa fa-camera fa-5x" aria-hidden="true" />
      </button>
    );
  }
}

export default ScreenshotButton;
