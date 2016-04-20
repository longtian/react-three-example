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

const element = document.createElement('div');

document.body.appendChild(element);

render(<div>
  <Mouse />
  <Sprite />
  <OBJLoader />
  <Lights />
  <Line />
  <RotatingBox />
</div>, element);
