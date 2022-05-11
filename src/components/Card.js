import React from "react";

const Card = (props) => {
  return (
    <div className="image-div" onClick={props.incrementScore} >
      <img className="agent" data-selected={props.isSelected} name={props.name}
      alt={props.imageAlt} src={props.imageSrc} width='200px' length='200px' ></img>
    </div>
  )
}

export default Card;