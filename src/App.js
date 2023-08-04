import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BioClick from "./components/BioClick";
/*import Bio from "./components/Bio";*/

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
