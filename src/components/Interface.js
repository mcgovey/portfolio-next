import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppHeader from './AppHeader';
import ProjectListDrawer from './ProjectListDrawer';
import Project from './Project';
import SelectList from './SelectList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
	},
});

class Interface extends Component {

	render() {
		const { classes } = this.props;
		return (
      <div className={classes.root}>
				<AppHeader />
				<ProjectListDrawer />
				<Project />
				<SelectList />
			</div>
		)
	}
}
export default withStyles(styles, { withTheme: true })(Interface);