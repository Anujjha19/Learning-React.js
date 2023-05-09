import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount');
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');
    if (count !== 0) {
      console.log('count has changed');
    }
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log('render');
  
  return (
    <div>
      <h1>Lifecycle Methods Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default ExampleComponent;
