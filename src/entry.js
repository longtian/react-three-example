console.clear();

import React from 'react';
import { render } from 'react-dom';
import 'style!css!./main.css';
import RotatingBox from './RotatingBox';
import Line from './Line';
import Lights from './Lights';
import OBJLoader from './OBJLoader';
import Sprite from './Sprite';
import Mouse from './Mouse';
import Orientation from './Orientation';

const element = document.createElement('div');

document.body.appendChild(element);

render(<div>
  <Orientation />
  <Mouse />
  <Sprite />
  <OBJLoader />
  <Lights />
  <Line />
  <RotatingBox />
</div>, element);
