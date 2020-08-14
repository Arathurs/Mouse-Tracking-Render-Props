import React from 'react';
import { Mouse } from './Mouse';
import { Chimp } from './Chimp';

export class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Chimp mouse={mouse} />
        )}/>
      </div>
    );
  }
}