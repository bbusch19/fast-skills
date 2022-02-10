import Button from '../Button/Button'
import { Card, CardImage } from './MovieCard.styles'
import { useRecoilState } from 'recoil'
import { playlistState } from '../state'

function MovieCard({ movie, hasButton = true }) {
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  const handleClick = (movie) => {
    setPlaylist([...playlist, movie])
  }

  return (
    <Card>
      <h3>{movie.Title}</h3>
      <CardImage alt="movie" src={movie.Poster} />
      {hasButton &&
        (!playlist.find((savedMovie) => movie.imdbID === savedMovie.imdbID) ? (
          <Button handleClick={() => handleClick(movie)}>
            Add To Playlist
          </Button>
        ) : (
          <Button>Added!</Button>
        ))}
    </Card>
  )
}

export default MovieCard
