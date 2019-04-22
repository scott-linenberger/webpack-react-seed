import React from 'react';
import { render } from 'react-dom';

/* style import */
import './index.scss';

const EntryPoint = () => (
  <div className="entry-point">
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
