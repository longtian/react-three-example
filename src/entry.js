console.clear();

import React from 'react';
import { render } from 'react-dom';
import RotatingBox from './RotatingBox';

const element = document.createElement('div');

document.body.appendChild(element);

render(<div>
  <RotatingBox />
</div>, element);
