import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }

}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>

      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{state}</p>

      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', marginRight: '10px' }} onClick={() => dispatch('INCREMENT')}>Inc ➕</button>

      <button style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }} onClick={() => dispatch('DECREMENT')}>Dec ➖</button>

    </div>

  )
}

export default UseReducer