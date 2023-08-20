import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong,audioRef,isPlaying,setSongs,libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? "show" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song,index) => (
            <LibrarySong id={song.id} setSongs={setSongs} songs={songs} isPlaying={isPlaying} audioRef={audioRef} song={song} key={song.id} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  )
}

export default Library;
