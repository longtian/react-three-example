console.clear();

import React from 'react';
import { render } from 'react-dom';
import 'style!css!./main.css';
import RotatingBox from './RotatingBox';
import Line from './Line';
import Lights from './Lights';

const element = document.createElement('div');

document.body.appendChild(element);

render(<div>
  <Lights />
  <Line />
  <RotatingBox />
</div>, element);
