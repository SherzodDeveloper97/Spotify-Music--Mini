import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "../styles/_nav.scss";

const Nav = ({libraryStatus,setLibraryStatus}) => {
  return (
    <nav>
        <h1>
          <i className="fa-brands fa-spotify"></i> &nbsp;
          Spotify Analog
        </h1>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
            Library
            <FontAwesomeIcon icon={faMusic} />
        </button>
    </nav>
  )
}

export default Nav
