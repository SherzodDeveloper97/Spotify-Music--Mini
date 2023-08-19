import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";
import { useState } from "react";
import Library from "./components/Library";

function App() {

  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[1]);
  const [isPlaying,setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
