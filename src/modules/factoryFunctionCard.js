// Factory function used to create a Card component
const factoryFunctionCard = (Card, props, agentProfiles, agent, reqSrc) => {
  return (
    <Card incrementScore={props.incrementScore} 
      imageAlt={agentProfiles[agent].imageAlt} imageSrc={reqSrc} 
      isSelected={agentProfiles[agent].isSelected}
      />
  )
}

export default factoryFunctionCard;