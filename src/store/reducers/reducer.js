const initialState = {
    count: 0
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "COUNT-UP":
        newState.count += action.value;
        
        break;
  
      case "COUNT-DOWN":
        newState.count -= action.value;
        break;
      case "LOADING":
        newState.loading = true;
    }
    return newState;
  };
  
  export default reducer;