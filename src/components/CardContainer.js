import React from "react";
import mapList from "../modules/map-list";
import Card from "./Card";
import factoryFunctionCard from "../modules/factoryFunctionCard";
import buildMyValues from "../modules/imagePathFunction";
// The CardContainer is used to hold my card elements.
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  const { agentProfiles } = props;
  
  // Get agent name string via key
  const agentNamesArray = Object.keys(agentProfiles);

  // Lists to keep my image path and agent Card components in
  const agentImagePath = [];
  const agentArray = [];

  const imagePathFunction = (agentName) => require(`../assets/agents/${agentName}.png`);

  buildMyValues(agentNamesArray, agentImagePath, imagePathFunction, agentNamesArray);
  
  // Function to fill my agentArray
  agentImagePath.forEach((imgSrc) => {
    agentArray.push(factoryFunctionCard(Card, props, agentProfiles, agentNamesArray[agentImagePath.indexOf(imgSrc)], imgSrc))
  })

  const myCardList = mapList(agentArray);

  return (
    <div id="card-container">
      <ul id="ul-card">
        {myCardList}
      </ul>
    </div>
  )
}

export default CardContainer;