import React, { Component } from 'react';

import AppHeader from './AppHeader';
import ProjectListDrawer from './ProjectListDrawer';
import SelectList from './SelectList';

export default class Interface extends Component {

	render() {
		return (
			<div>
				<AppHeader />
				<ProjectListDrawer />
				<SelectList />
			</div>
		)
	}
}
