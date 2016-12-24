import React from 'react';
import ReactDOM from 'react-dom';
import Helpers from '../../js/helpers';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.getYoutubeUrl = this.getYoutubeUrl.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.startSession = this.startSession.bind(this);
  }
  componentDidMount() {
    window.addEventListener('load', this.getYoutubeUrl);
  }
  getYoutubeUrl() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      if (tabs[0].url.match(/youtube/)) {
        this.setState({ value: tabs[0].url });
      } else {
        this.setState({ value: 'https://www.youtube.com/watch?v=4EJay-6Bioo&feature=youtu.be' });
      }
    }.bind(this));
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  startSession() {
    chrome.tabs.create({ url: 'dist/session/index.html?' + Helpers.youtube_parser(this.state.value) }, function (tab) {
      targetId = tab.id;
      activeSession = true;
    });
  }
  render() {
    if (this.state.value) {
      return (
        <div>
          <form onSubmit={this.startSession}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Create new session?" />
          </form>
        </div>
      );
    }
    return (<div> Loading</div>);
  }
}


ReactDOM.render(
  <Popup />,
  document.getElementById('app'),
);
