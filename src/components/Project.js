import React, { Component } from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Project extends Component {

	render() {
    console.log('props', this.props);
    const { classes, selectedProject } = this.props;
    return (
			<main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{selectedProject['project-name']}</Typography>
			</main>
		)
  }
}

function mapStateToProps(state) {
	return {
    selectedProject: state.projectState.selectedProject,
	};
}

export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps)
)(Project);