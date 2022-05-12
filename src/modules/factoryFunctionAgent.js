  // A factory function used to create agent profile objects
  
  const factoryFunctionAgent = function(imageAlt, isSelected) {
    
    const isSelectedTrue = function(bool = false) {
      this.isSelected = true;
    }; 

    return {
      imageAlt,
      isSelected,
      isSelectedTrue
    }
  };

export default factoryFunctionAgent;