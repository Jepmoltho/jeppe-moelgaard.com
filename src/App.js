import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BioClick from "./components/BioClick";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <BioClick />
      <Tabs />
    </div>
  );
}

export default App;
