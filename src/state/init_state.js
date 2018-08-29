// import Immutable from 'immutable';
import projData from '../resources/projects';

function hydrate(usePrevious = null) {
  if(!usePrevious){
    console.log('all layers', projData);
    return {
	    projectState: {
        selectedProject: null,
        layerData: projData
      }
    };
  }
}

const InitialState = hydrate();
export default InitialState;
