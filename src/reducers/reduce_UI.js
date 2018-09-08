const UIReducer = (state={drawerOpen: false},action) => {
  switch(action.type){

    case 'OPEN_DRAWER': {
			console.log('reducer called', action);
      return {
        ...state,
        drawerOpen : action.payload
      };
    }
		case 'CLOSE_DRAWER': {
      return {
        ...state,
        drawerOpen : action.payload
      };
    }
    default:   
        return state;
  }
}
export default UIReducer;