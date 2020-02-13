import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Stack />
    </div>
  );
}

const Header = () => {
  return (
    <ul>
      <li>Home</li>
      <li>News</li>
      <li>About</li>
    </ul>
  )
}

const Stack = () => {
  return (
    <div className="App">
      <ul>
        <li>html</li>
        <li>css</li>
      </ul>
    </div>
  )
}

export default App;
