import { useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import MovieCard from '../MovieCard'
import { Input, InputGroup, MoviesContainer } from './Home.styles'
import { Link } from 'react-router-dom'
import Header from '../Header'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  const fetchMovies = async (search) => {
    error && setError('')

    if (search) {
      try {
        const response = await axios.request({
          url: 'https://www.omdbapi.com/?apikey=7a0a5d6f',
          method: 'GET',
          params: {
            s: searchTerm,
          },
        })

        if (response.data.Error) {
          setError(response.data.Error)
        } else {
          setMovies(response.data.Search)
        }
      } catch {
        setError('An unknown error occured. Please try again later')
      }
    }
  }

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      fetchMovies(searchTerm)
    }

    setSearchTerm(event.target.value)
  }

  const handleClick = () => {
    fetchMovies(searchTerm)
  }

  return (
    <div className="home">
      <Header>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/playlist">
          <h3>View Playlist</h3>
        </Link>
        <InputGroup>
          <Input
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleChange}
          />
          <Button noMargin={true} handleClick={handleClick}>
            Submit
          </Button>
        </InputGroup>
      </Header>
      {error ? (
        <p>{error}</p>
      ) : (
        <MoviesContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </MoviesContainer>
      )}
    </div>
  )
}

export default Home
