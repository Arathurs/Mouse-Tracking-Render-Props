import React from 'react';

export class Chimp extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/img/chimp.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="He's going BANANASSSS!!!"/>
      );
    }
}