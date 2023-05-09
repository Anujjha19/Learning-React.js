import React, { useState } from 'react';
import useTitleCountCH from './useTitleCountCH';

function CustomHooks() {
  const [count, setCount] = useState(0);

  useTitleCountCH(count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CustomHooks;
