const ProjectReducer = (state={isFetching : false, projArray : []},action) => {
  switch(action.type){
    case 'Start_Project_Pull': 
    return {
      isFetching : true
    }

    case 'End_Project_Pull': 
    return {
      isFetching : false,
      projArray : action.devsArray
    }
    case 'SELECT_PROJ': 
    return {
      ...state,
      selectedProject : +action.payload
    }
    default:   
        return state;
  }
}
export default ProjectReducer;