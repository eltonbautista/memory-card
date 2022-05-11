const myAgentProfiles = 
  {
    astra: {
      imageAlt: 'Astra',
      imageSrc: '../assets/astra.png',
      isSelected: false,
    },
    breach: {
      imageAlt: 'Breach',
      imageSrc: '../assets/breach.png',
      isSelected: false,
    },
    brimstone: {
      imageAlt: 'Brimstone',
      imageSrc: '../assets/brimstone.png',
      isSelected: false,
    },
    chamber: {
      imageAlt: 'Chamber',
      imageSrc: '../assets/chamber.png',
      isSelected: false,
    },
    cypher: {
      imageAlt: 'Cypher',
      imageSrc: '../assets/cypher.png',
      isSelected: false,
    },
  }

  const factoryFunctionAgent = function(imageAlt, imageSrc, isSelected) {
    
    const toggleIsSelected = function(bool = false) {
      this.isSelected = true;
    }; 

    return {
      imageAlt,
      imageSrc,
      isSelected,
      toggleIsSelected
    }
  };

export default factoryFunctionAgent;