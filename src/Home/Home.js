import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import MovieCard from '../MovieCard'
import { Header, Input, InputGroup } from './Home.styles'
import { Link } from 'react-router-dom'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  const fetchMovies = async (search) => {
    if (search) {
      const response = await axios.request({
        url: 'http://www.omdbapi.com/?apikey=7a0a5d6f',
        method: 'GET',
        params: {
          s: searchTerm,
        },
      })

      setMovies(response.data.Search)

      console.log(movies)
    }
  }

  useEffect(() => {})

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
        <Link to="/">Home</Link>
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
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
