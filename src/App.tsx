// React and useState hook
import React, { useState } from 'react';
// Styling
import './App.css';
// Components
import Rating from './components/Rating';
import Thanks from './components/Thanks';

function App() {

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="App h-screen w-screen flex justify-center items-center p-4">
      {
        // if the form isn't submitted it will render Rating component, else it will render thanks screen
        submitted === false ? (
          <Rating setRating={setRating} setSubmitted={setSubmitted} />) :
          <Thanks rating={rating} />
      }
    </div>
  );
}

export default App;
