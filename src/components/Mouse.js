import React from 'react';

export class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Use the `render` prop to dynamically determine what to render.
            This allows the component's functionality to become reusable,
            instead of being limited to a static, inflexible representation
            of what <Mouse> renders.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }