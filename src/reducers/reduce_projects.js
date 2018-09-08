const ProjectReducer = (state={isFetching : false, projectList : []},action) => {
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
    case 'SELECT_PROJ': {
			console.log('action', action);
      const selectedProject = state.projectList.filter(d => {
        return d.id === +action.payload;
      });
      return {
        ...state,
        selectedProject : selectedProject[0]
      };
    }
    
    default:   
        return state;
  }
}
export default ProjectReducer;