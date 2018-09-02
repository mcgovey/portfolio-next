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
      const selectedProject = state.projectList.filter(d => {
        return d.id === +action.payload;
      });
      return {
        ...state,
        selectedProject : selectedProject
      };
    }
    
    default:   
        return state;
  }
}
export default ProjectReducer;