import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <p>Ini header</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Halo Semuanya</h1>
    </div>
  );
}

export default App;
