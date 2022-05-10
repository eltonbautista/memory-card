import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="image-div">
      <img alt={props.imageAlt} src={props.imageSrc} width='200px' length='200px' ></img>
    </div>
  )
}

export default Card;