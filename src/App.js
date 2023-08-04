import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BioSwiper from "./components/BioSwiper";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <BioSwiper />
      <Tabs />
    </div>
  );
}

export default App;
