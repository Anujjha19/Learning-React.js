import React from 'react'
import useFetchCH from './useFetchCH'

const App = () => {
  const { data, loading, error , reFetch } = useFetchCH("https://v2.jokeapi.dev/joke/Any")

  if (loading) return <h1> Loading ... </h1>
  if (error) console.log(error);
  return (
    <div>
      <h1>Jokes Using API </h1>
      <h2> {data?.setup} : {data?.delivery} </h2>

      <button onClick={reFetch} > reFetch</button>
    </div>
  )
}

export default App