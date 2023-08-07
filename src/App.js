import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BioClick from "./components/BioClick";
/*import Bio from "./components/Bio";*/

import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <div className="scroll-snap-container">
        <Header />
        <BioClick />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
