import React, { useState } from 'react';
import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
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
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist app</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} />
      <button type="button" className="wish-clear">
        Archive done
      </button>
    </div>
  );
};

export default App;
