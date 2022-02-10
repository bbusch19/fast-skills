import '@fontsource/roboto'
import './App.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Playlist from './Playlist'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route exact path="/playlist" element={<Playlist />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
