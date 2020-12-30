import React from 'react';
import classNames from 'classnames';
import './App.css';

const wishes = [
  {
    text: 'Learn japanese',
    done: false,
  },
  {
    text: 'Do some exercise',
    done: true,
  },
  {
    text: 'Go to the mall',
    done: false,
  },
];
const App = () => (
  <div className="app">
    <h1>My wishlist app</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input className="wish-input__field" type="text" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <li key="text" className={classNames('wish-list__item', { 'wish-list__item--done': done })}>
          <input type="checkbox" id={`wish${i}`} checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
      ))}
    </ul>
    <button type="button" className="wish-clear">Archive done</button>
  </div>
);

export default App;
