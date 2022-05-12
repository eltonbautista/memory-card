import React from "react";
import mapList from "../modules/map-list";
import Card from "./Card";
// The CardContainer is used to hold my card elements.
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  const { agentProfiles } = props;


  const cardArray = 
  [
  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.astra.imageAlt} imageSrc={require('../assets/astra.png')} 
      isSelected={agentProfiles.astra.isSelected}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.breach.imageAlt} imageSrc={require('../assets/breach.png')} 
      isSelected={agentProfiles.breach.isSelected}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.brimstone.imageAlt} imageSrc={require('../assets/brimstone.png')} 
      isSelected={agentProfiles.brimstone.isSelected}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.chamber.imageAlt} imageSrc={require('../assets/chamber.png')} 
      isSelected={agentProfiles.chamber.isSelected}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.cypher.imageAlt} imageSrc={require('../assets/cypher.png')} 
      isSelected={agentProfiles.cypher.isSelected}
      />

  ];

  // myCardList is the array of cards after being shuffled by mapList()
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