import React, { useState } from 'react';
import './App.css';
import Rating from './components/Rating';
import Thanks from './components/Thanks';

function App() {

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="App h-screen w-screen flex justify-center items-center p-4">
      {
        submitted === false ? (
          <Rating setRating={setRating} setSubmitted={setSubmitted} />) :
          <Thanks rating={rating} />
      }
    </div>
  );
}

export default App;
