import React, { Component } from 'react';

import SelectList from './SelectList';
import ProjectListDrawer from './ProjectListDrawer';

export default class Interface extends Component {

	render() {
		return (
			<div>
				<SelectList />
				<ProjectListDrawer />
			</div>
		)
	}
}
