import React from "react";
import mapList from "../modules/map-list";
// A container for my cards
// Responsible for shuffling the order of the cards after a user clicks on a card.

const CardContainer = (props) => {
  // Array containing JSX Card components


  const myCardList = mapList(props.myCards);

  return (
    <div id="card-container">
      <ul id="ul-card">
        {myCardList}
      </ul>
    </div>
  )
}

export default CardContainer;