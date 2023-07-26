//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
//import Wheel from "./components/Wheel";
import Bio from "./components/Bio";
import Imageandtext from "./components/Imageandtext";

function App() {
  return (
    <div className="App">
      {/*<h1 class="jumping-letters">Frontend Developer</h1>*/}
      {/*<Imageandtext />*/}

      <Header />
      <Bio />
      {/*<Wheel />*/}
    </div>
  );
}

export default App;
