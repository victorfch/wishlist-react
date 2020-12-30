import React from 'react';
import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

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
    <WishInput />
    <WishList wishes={wishes} />
    <button type="button" className="wish-clear">Archive done</button>
  </div>
);

export default App;
