import Header from "./Header";
import Content from "./Content";

const Footer = () => {
  return(
    <div>
      <h4>Ini Footer</h4>
      <span>@2018</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
