import React from "react";
import Card from "./Card";
import mapList from "../modules/map-list";
// A container for my cards
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  // Array containing JSX Card components
  const cardArray = 
  [
  <Card imageAlt='Astra' imageSrc={require('../assets/astra.png')} />,
  <Card imageAlt='Breach' imageSrc={require('../assets/breach.png')} />,
  <Card imageAlt='Brimstone' imageSrc={require('../assets/brimstone.png')} />,
  <Card imageAlt='Chamber' imageSrc={require('../assets/chamber.png')} />,
  <Card imageAlt='Cypher' imageSrc={require('../assets/cypher.png')} />
  ];

  const myCardList = mapList(cardArray);

  return (
    <div id="card-container">
      <ul id="ul-card">
        {myCardList}
      </ul>
    </div>
  )
}

export default CardContainer;