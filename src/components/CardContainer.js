import React from "react";
import mapList from "../modules/map-list";
import Card from "./Card";
// A container for my cards
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  // Array containing JSX Card components
  const { agentProfiles } = props;


  const cardArray = 
  [
  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.astra.imageAlt} imageSrc={require('../assets/astra.png')} 
      isSelected={agentProfiles.astra.isSelected}
      name={agentProfiles.astra.imageAlt.toLowerCase()}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.breach.imageAlt} imageSrc={require('../assets/breach.png')} 
      isSelected={agentProfiles.breach.isSelected}
      name={agentProfiles.breach.imageAlt.toLowerCase()}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.brimstone.imageAlt} imageSrc={require('../assets/brimstone.png')} 
      isSelected={agentProfiles.brimstone.isSelected}
      name={agentProfiles.brimstone.imageAlt.toLowerCase()}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.chamber.imageAlt} imageSrc={require('../assets/chamber.png')} 
      isSelected={agentProfiles.chamber.isSelected}
      name={agentProfiles.chamber.imageAlt.toLowerCase()}
      />,

  <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles.cypher.imageAlt} imageSrc={require('../assets/cypher.png')} 
      isSelected={agentProfiles.cypher.isSelected}
      name={agentProfiles.cypher.imageAlt.toLowerCase()}
      />

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