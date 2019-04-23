import React from 'react';
import { render } from 'react-dom';

/* import style */
import styles from './index.css';

const {
  entryPoint,
} = styles;

console.log(styles);

const EntryPoint = () => (
  <div className={entryPoint}>
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
