import * as All from "./components/Index";

function App() {
  return (
    <div className="App">
      <All.Header/>
      <All.Top/>
      <All.Content/>
      <All.Footer nama="Masakan Nusantara" tahun="1990"/>
    </div>
  );
}

export default App;
