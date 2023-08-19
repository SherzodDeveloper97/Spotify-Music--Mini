import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Player = ({currentSong,isPlaying,setIsPlaying}) => {
  // Ref
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    // console.log(audioRef.current);
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  // State:
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  // Event Handlers:
  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime);
    const current = e.target.currentTime;
    // console.log(e.target.duration);
    const duration = e.target.duration;

    setSongInfo({
      currentTime:current,
      duration,
    })
  }

  const getTime = (time) => {
    return (
      Math.floor(time/60) + ":" +("0" + Math.floor(time%60)).slice(-2)
    )
  }

  const dragHandler = (e) => {
    // console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    })
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" min="0" onChange={dragHandler} max={songInfo.duration} value={songInfo.currentTime} />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
      </div>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;
