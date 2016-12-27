import React, { PropTypes } from 'react';
import YoutubeIframe from './YoutubeIframe';
import ScreenshotContainer from '../containers/ScreenshotContainer'
import Helpers from '../../js/helpers';
import Screenshot from './Screenshot';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoId: '', screenshots: [], id:0, screenshotIds:[] };
    this.addScreenshot = this.addScreenshot.bind(this);
  }
  componentDidMount() {
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
     this.setState({ videoId: tabs[0].url.split('?')[1].replace('#/', '') });
   }.bind(this));
  }
  addScreenshot(data) {
    const image = new window.Image();
    image.src = data;
    image.onload = () => {
      this.state.screenshots.push(image);
      this.state.screenshotIds.push(this.state.id);
      this.setState({id: this.state.id += 1});
    };
  }
  render() {
    if (this.state.videoId) {
      return (
        <div>
          <YoutubeIframe videoId={this.state.videoId} addScreenshot={this.addScreenshot} />
          <div className="col-md-6">
            <ScreenshotContainer screenshotIds={this.state.screenshotIds} screenshots={this.state.screenshots} />
          </div>
        </div>
      );
    }
    return (<div> Loading </div>);
  }
}

export default Session;
