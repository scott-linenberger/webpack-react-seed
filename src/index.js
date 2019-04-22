import React from 'react';
import { render } from 'react-dom';

const EntryPoint = () => (
  <div>
    <p>Entry Point</p>
  </div>
);

const elementRoot = document.getElementById('root');

render(
  (
    <EntryPoint />
  ),
  elementRoot,
);
