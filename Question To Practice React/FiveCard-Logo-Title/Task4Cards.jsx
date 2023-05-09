import React from "react";
import Card from "../Task/Task4Card";
import "./Task/Task4Card.css";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      logo: "https://via.placeholder.com/50",
      header1: "Card 1 Header 1",
      header2: "Card 1 Header 2"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      logo: "https://via.placeholder.com/50",
      header1: "Card 2 Header 1",
      header2: "Card 2 Header 2"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      logo: "https://via.placeholder.com/50",
      header1: "Card 3 Header 1",
      header2: "Card 3 Header 2"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      logo: "https://via.placeholder.com/50",
      header1: "Card 4 Header 1",
      header2: "Card 4 Header 2"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      logo: "https://via.placeholder.com/50",
      header1: "Card 5 Header 1",
      header2: "Card 5 Header 2"
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          logo={card.logo}
          header1={card.header1}
          header2={card.header2}
        />
      ))}
    </div>
  );
};

export default Cards;
