import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import { useRef,useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Ref
  const audioRef = useRef(null);

  // State
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library libraryStatus={libraryStatus} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setCurrentSong={setCurrentSong} audioRef={audioRef} />
    </div>
  );
}

export default App;
