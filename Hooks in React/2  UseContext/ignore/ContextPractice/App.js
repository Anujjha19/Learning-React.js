import React from 'react';
import NoteState from './ContextPractice/notes/NoteState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'

function App() {
    return (
        <div>
            <NoteState>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </Router>
            </NoteState>
        </div>
    );
}

export default App;
