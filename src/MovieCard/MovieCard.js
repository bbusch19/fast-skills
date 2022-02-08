import Button from '../Button/Button'
import { Card } from './MovieCard.styles'

function MovieCard({ movie }) {
  return (
    <Card>
      <h3>{movie.Title}</h3>
      <img alt="movie" src={movie.Poster} />
      <Button>Add To Playlist</Button>
    </Card>
  )
}

export default MovieCard
