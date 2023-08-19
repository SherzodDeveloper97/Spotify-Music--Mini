import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song,index) => (
            <LibrarySong song={song} key={song.id} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  )
}

export default Library;
