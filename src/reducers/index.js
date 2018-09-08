import { combineReducers } from 'redux';
import ProjectReducer from './reduce_projects';
import UIReducer from './reduce_UI';

const rootReducer = combineReducers({
	projectState: ProjectReducer,
	uiState: UIReducer,
});
// console.log('reducers combined');
export default rootReducer;
