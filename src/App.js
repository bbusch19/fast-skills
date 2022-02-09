import '@fontsource/roboto'
import './App.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Playlists from './Playlists'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route exact path="/playlists" element={<Playlists />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
