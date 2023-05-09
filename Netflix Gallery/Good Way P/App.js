import React from "react";

import Card from "./Card";
import data from './Data'



const ncard = (val) => {
  return (
    <Card
      imgSrc={val.imgSrc}
      genre={val.genre}
      seriesName={val.seriesName}
      link={val.link}
    />
  )
}

const App = () => {
  return (
    <>
      <h1 className='heading_style heading'>A Netflix Original Series  </h1>

      {data.map(ncard)
      }


    </>
  )
}

export default App