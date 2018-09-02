import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectProject } from '../actions/index';

class SelectList extends Component {

	_renderProjects() {
		console.log('project list',this.props)
		const { projectList, selectProject } = this.props;
		return (
			<ul>
				{projectList.map((d) => {
					return (
						<li 
							key={d.id}
							data-id={d.id} 
							onClick={selectProject}
						>
							{d['project-name']}
						</li>
					)
				})}
			</ul>
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