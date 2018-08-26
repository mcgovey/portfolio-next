import { combineReducers } from 'redux';
// import Immutable from 'immutable';
import ProjectReducer from './reduce_projects';

const rootReducer = combineReducers({
  projectState: ProjectReducer,
});
console.log('reducers combined');
export default rootReducer;
