import "./App.css";
import Header from "./components/Header/";
import Container from "./components/Container";
import {  buscaPosts } from "./api/data.js";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Container url={"data.json"} busca={buscaPosts} />
    </div>
  );
}

export default App;
