import React from "react";

import Card from "./Card";

const App = () => {
  return (
    <>
      <h1 className='heading_style heading'>A Netflix Original Series  </h1>
      <Card
        imgSrc="https://w0.peakpx.com/wallpaper/869/85/HD-wallpaper-dark-netflix-coffee-dark-iron-love-man-men-movie-netflix-series-thumbnail.jpg"
        genre='Thriller , Sci-Fi'
        seriesName='DARK'
        link="https://www.netflix.com/in/title/80100172"
      />
      <Card imgSrc="https://wallpapercave.com/wp/wp1839617.jpg"
        genre='Sci-Fi TV , Horror TV Serials'
        seriesName='Stranger Things '
        link="https://www.netflix.com/in/title/80057281"
      />
      <Card imgSrc="https://www.comingsoon.net/wp-content/uploads/sites/3/2015/07/narcossocials.jpg"
        genre='Thrillers , Actions & Adventures'
        seriesName='Narcos'
        link="https://www.netflix.com/in/title/80025172"
      />
    </>
  )
}

export default App