// import React, { useState } from 'react';
import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  stepImage: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  // state: Readonly<State> = {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    stepImage: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <label htmlFor="stepId">stepImage</label>
        <input
          id="stepId"
          type="text"
          value={this.state.stepImage}
          onChange={e => this.setState({ stepImage: parseInt(e.target.value) })}
        />

        <label htmlFor="frameId">frameSize</label>
        <input
          id="frameId"
          type="text"
          value={this.state.frameSize}
          onChange={e => this.setState({ frameSize: parseInt(e.target.value) })}
        />

        <label htmlFor="itemId">itemWidth</label>
        <input
          id="itemId"
          type="text"
          value={this.state.itemWidth}
          onChange={e => this.setState({ itemWidth: parseInt(e.target.value) })}
        />

        <label htmlFor="animation">animationDuration</label>
        <input
          id="animation"
          type="number"
          value={this.state.animationDuration}
          onChange={e =>
            this.setState({ animationDuration: parseInt(e.target.value) })
          }
        />

        <label htmlFor="infinite">infinite </label>
        <input
          id="infinite"
          type="checkbox"
          value={this.state.infinite ? 'false' : 'true'}
          onChange={e => this.setState({ infinite: e.target.checked })}
        />

        <Carousel
          images={images}
          step={this.state.stepImage}
          frameSize={this.state.frameSize}
          itemWidth={this.state.itemWidth}
          animationDuration={this.state.animationDuration}
          infinite={this.state.infinite}
        />
      </div>
    );
  }
}

export default App;
