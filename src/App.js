import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Temperature />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  const header = "Temperature Control App";

  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
}

function Temperature() {


  let [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount((prevCount) => (prevCount = 0));
  }
  const degrees = `${count}°C`
  return (
    <div>
      <div class="container">
        <div className="count-container">
          <div class="count">{degrees}</div>
        </div>

        <div className="control-container">
          <div class="increment" onClick={increment}>
            +
          </div>
          <div class="decrement" onClick={decrement}>
            -
          </div>
        </div>
      </div>
      <div className="reset">
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

function Footer() {
  const footer = "Created by Mudia Osagie ©";
  return (
    <div className="foo-center">
      <p className="foo">{footer}</p>
    </div>
  );
}
