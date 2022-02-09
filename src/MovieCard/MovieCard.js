import Button from '../Button/Button'
import { Card } from './MovieCard.styles'
import { useRecoilState } from 'recoil'
import { playlistState } from '../state'

function MovieCard({ movie }) {
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  const handleClick = (movie) => {
    setPlaylist([...playlist, movie])
    console.log(playlist)
  }

  return (
    <Card>
      <h3>{movie.Title}</h3>
      <img alt="movie" src={movie.Poster} />
      <Button handleClick={() => handleClick(movie)}>Add To Playlist</Button>
    </Card>
  )
}

export default MovieCard
