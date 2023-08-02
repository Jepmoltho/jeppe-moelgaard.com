//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
//import Wheel from "./components/Wheel";
import Bio from "./components/Bio";
//import Imageandtext from "./components/Imageandtext";
/*import ComponentHeadline from "./components/ComponentHeadline";*/
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Tabs />
    </div>
  );
}

export default App;
