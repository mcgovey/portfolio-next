// import Immutable from 'immutable';
import projData from '../resources/projects';

function hydrate(usePrevious = null) {
  if(!usePrevious){
    return {
	    projectState: {
        selectedProject: null,
        projectList: projData,
			},
			uiState: {
				drawerOpen: false,
			}
    };
  }
}

const InitialState = hydrate();
export default InitialState;
