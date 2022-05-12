  // A factory function used to create agent profile objects
  
  const factoryFunctionAgent = function(imageAlt, imageSrc, isSelected) {
    
    const isSelectedTrue = function(bool = false) {
      this.isSelected = true;
    }; 

    return {
      imageAlt,
      imageSrc,
      isSelected,
      isSelectedTrue
    }
  };

export default factoryFunctionAgent;