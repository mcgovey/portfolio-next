import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectProject } from '../actions/index';

class SelectList extends Component {

	_renderProjects() {
		console.log('project list',this.props)
		const { projectList } = this.props;
		return (
			<div>
				{projectList.map((d) => {
					return (
						<button key={d.id}>{d['project-name']}</button>
					)
				})}
			</div>
		) 
	}
	render() {
		return (
			<div>
				{this._renderProjects()}
			</div>
		)
	}
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectProject: selectProject,
  },dispatch);
}
function mapStateToProps(state) {
  return{
    selectedProject: state.projectState.selectedProject,
    projectList: state.projectState.projectList,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectList);