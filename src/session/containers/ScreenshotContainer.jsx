import React, { PropTypes } from 'react';
import { Layer, Stage } from 'react-konva';
import Screenshot from '../components/Screenshot';

class ScreenshotContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var screenshotRender = [];
    var i;
    for (i = 0; i < this.props.screenshots.length; i++) {
      screenshotRender.push(<Screenshot key={this.props.screenshotIds[i]} image={this.props.screenshots[i]}/> );
    }
    return (
      <div>
        {screenshotRender}
      </div>
    );
  }
}

export default ScreenshotContainer;
