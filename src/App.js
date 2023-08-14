import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bio from "./components/Bio";
import Header from "./components/Header.tsx";
import Tabs from "./components/Tabs";
import BackToTopButton from "./components/BackToTop";
import BackToTopButtonDesktop from "./components/BackToTopDesktop";

function App() {
  return (
    <div className="App">
      <div className="scroll-snap-container">
        <Header />
        <Bio />
        <Tabs />
        <BackToTopButton />
        <BackToTopButtonDesktop />
      </div>
    </div>
  );
}

export default App;
