

const LibrarySong = ({song,setCurrentSong,audioRef,isPlaying,songs,id,setSongs}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play();
        })
      }
    };

      // Adding Active State
    const newSongs = songs.map(song => {
      if(song.id === id){
        return {
          ...song,
          active:true,
        }
      }else{
        return {
          ...song,
          active:false,
        }
      }
    });
    setSongs(newSongs);
  };

  

  return (
    <div className={`library-song ${song.active ? "selected" : ""}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;
