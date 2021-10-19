import * as Page from "./Page/Index";

function App() {
  return (
    <div className="App">
      <Page.Header/>
      <Page.MenuUtama/>
      <Page.MenuMakanan/>
      <Page.MenuTentangKami/>
      <Page.MenuKontak/>
      <Page.Footer/>
    </div>
  );
}

export default App;
