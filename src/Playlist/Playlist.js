import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Header from '../Header'
import MovieCard from '../MovieCard/MovieCard'
import { playlistState } from '../state'
import { PlaylistFooter, PlaylistsWrapper } from './Playlist.styles'

function Playlist() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="playlist">
      <Header>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <h3>Your Playlist</h3>
      </Header>
      <PlaylistsWrapper>
        {playlist.map((movie) => (
          <MovieCard key={movie.imdbID} hasButton={false} movie={movie} />
        ))}
      </PlaylistsWrapper>
      <PlaylistFooter>
        <p>My favorite color is black</p>
      </PlaylistFooter>
    </div>
  )
}

export default Playlist
