import React from "react";
import './index.css'


function App() {

  let currDate = new Date(2023, 3, 23, 14);
  currDate = currDate.getHours();

  let greeting = '';
  const cssStyle = {
    fontWeight: "bold",
  }

  if (currDate >= 0 && currDate < 12) {
    greeting = " Good Morning ";
    cssStyle.color = "#00b894"
  } else if (currDate >= 12 && currDate < 20) {
    greeting = " Good Afternoon "
    cssStyle.color = "Orange"
  }
  else if (currDate >= 20 && currDate < 24) {
    greeting = " Good Night "
    cssStyle.color = "Black "
  }

  return (
    <div className='main_div'>
      <p> Hello Sir it's {currDate}, Greetings :  <span style={cssStyle}> {greeting} </span> </p>

    </div>
  )
}

export default App;


