import YoutubeIframe from './YoutubeIframe';
import React, { PropTypes } from 'react';
import Helpers from '../../js/helpers';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  componentDidMount() {
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
     this.setState({ value: tabs[0].url });
   }.bind(this));
  }
  render() {
    if (this.state.value) {
      return (
        <div>
          <YoutubeIframe video={this.state.value.split('?')[1].replace('#/', '')} />
        </div>
      );
    }
    return (<div> Loading </div>);
  }
}

export default Session;
