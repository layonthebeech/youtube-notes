import React, { PropTypes } from 'react';
import { Layer, Stage, Image } from 'react-konva';

class Screenshot extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Stage width={600} height={600}>
          <Layer>
            <Image image={this.props.image} />
          </Layer>
        </Stage>
        <textarea />
      </div>
    );
  }
}

export default Screenshot;
