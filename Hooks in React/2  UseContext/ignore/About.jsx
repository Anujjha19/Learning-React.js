import React , { useContext, useEffect } from 'react';

import noteContext from './ContextPractice/notes/NoteContext';


 const About = () => {
const a = useContext(noteContext)

useEffect( () => {
    a.update()
    // eslint-disable-next-line
} , [])

  return (
    <div>About
    {a.state.name} in class {a.class}

    </div>
  )
}
export default About;