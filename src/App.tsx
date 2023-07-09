import Footer from "./components/Footer";
import GameOne from "./components/GameOne";
import GameThree from "./components/GameThree";
import GameTwo from "./components/GameTwo";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Welcome from "./components/Welcome";
import "./App.css";
import { Suspense, useEffect } from "react";
import { Loading } from "./Loading";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="space-y-[5%] fortnite-light">
        <Navbar />
        <div id="div_welcome">
          <Welcome />
        </div>
        <div id="div_presentation">
          <Presentation />
        </div>
        <div id="div_game_one" className="my-10">
          <GameOne />
        </div>
        <div id="div_game_two" className="!my-[10%]">
          <GameTwo />
        </div>
        <div id="div_game_three" className="my-10">
          <GameThree />
        </div>
        <Footer />

        {/* astuces */}
        <div className="fixed right-0 top-[40%] m-2">
          <label className="text-astuces fortnite">Alefaso ny feon-kira</label>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
