import React from "react";
import ReactDOM from "react-dom";

import Card from "./component/Card";
import SeriesData from "./SeriesData";

const cards = [];

for (let i = 0; i < SeriesData.length; i++) {
  const series = SeriesData[i];
  cards.push(
    <Card
      key={i}
      imgSrc={series.imgSrc}
      genre={series.genre}
      seriesName={series.seriesName}
      link={series.link}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style heading">A Netflix Original Series</h1>
    {cards}
  </>,
  document.getElementById("root")
);
