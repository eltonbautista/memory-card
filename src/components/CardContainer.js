import React from "react";
import Card from "./Card";
import mapList from "../modules/map-list";
// A container for my cards
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  // Array containing JSX Card components
  const cardArray = 
  [
  <Card incrementScore={props.incrementScore} imageAlt='Astra' imageSrc={require('../assets/astra.png')} />,
  <Card incrementScore={props.incrementScore} imageAlt='Breach' imageSrc={require('../assets/breach.png')} />,
  <Card incrementScore={props.incrementScore} imageAlt='Brimstone' imageSrc={require('../assets/brimstone.png')} />,
  <Card incrementScore={props.incrementScore} imageAlt='Chamber' imageSrc={require('../assets/chamber.png')} />,
  <Card incrementScore={props.incrementScore} imageAlt='Cypher' imageSrc={require('../assets/cypher.png')} />
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