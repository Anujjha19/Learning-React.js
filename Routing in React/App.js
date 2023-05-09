import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Card from './Card'

const App = () => {
  return (
    <div>
      <Router>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/card" element={<Card />} />

        </Routes>


      </Router>
    </div>
  )
}

export default App
