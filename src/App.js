import '@fontsource/roboto'
import './App.css'
import { RecoilRoot } from 'recoil'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button/Button'
import MovieCard from './MovieCard/MovieCard'

function App() {
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
    setSearchTerm(event.target.value)
  }

  const handleClick = () => {
    fetchMovies(searchTerm)
  }

  return (
    <div className="App">
      <RecoilRoot>
        <input value={searchTerm} onChange={handleChange} />
        <Button handleClick={handleClick}>Submit</Button>
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
