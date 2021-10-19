import Header from "./Header";

const Footer = () => {
  return(
    <div>
      <h4>Ini Footer</h4>
      <p>@2018</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Halo Semuanya</h1>
      <Footer/>
    </div>
  );
}

export default App;
