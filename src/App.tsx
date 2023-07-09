import Footer from "./components/Footer";
import GameOne from "./components/GameOne";
import GameThree from "./components/GameThree";
import GameTwo from "./components/GameTwo";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <div className="space-y-[5%]">
      <Navbar />
      <div id="welcome">
        <Welcome />
      </div>
      <div id="presentation">
        <Presentation />
      </div>
      <div id="game_one">
        <GameOne />
      </div>
      <div id="game_two">
        <GameTwo />
      </div>
      <div id="game_three">
        <GameThree />
      </div>
      <Footer />

      {/* astuces */}
      <div className="fixed right-0 top-[40%] m-2">
        <label className="text-astuces fortnite">Sound on please</label>
      </div>
    </div>
  );
}

export default App;
