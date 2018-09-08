import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CloudIcon from '@material-ui/icons/Cloud';
import FlightIcon from '@material-ui/icons/Flight';
import TrainIcon from '@material-ui/icons/Train';
import TuneIcon from '@material-ui/icons/Tune';
import TimerIcon from '@material-ui/icons/Timer';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import { closeDrawer, selectProject } from '../actions/index';


const iconDict = {
	'home': <HomeIcon />,
	'cloud': <CloudIcon />,
	'flight': <FlightIcon />,
	'train': <TrainIcon />,
	'tune': <TuneIcon />,
	'timer': <TimerIcon />,
	'location_city': <LocationCityIcon />,
}

const drawerWidth = 240;

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
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

class ProjectListDrawer extends React.Component {

	_renderProjList() {
		const { projectList, selectProject, selectedProject } = this.props;
		console.log('selectedProject', selectedProject);
		const projectListDiv = projectList.map((project) => {
			return (
				<ListItem 
					key={project.id} 
					button
					data-id={project.id}
					onClick={selectProject}
					selected={selectedProject && selectedProject.id === project.id}
				>
						<ListItemIcon>
							{iconDict[project.icon_name]}
						</ListItemIcon>
					<ListItemText primary={project['project-name']} />
				</ListItem>
			)
		})
		return (
			<div>
				{projectListDiv}
			</div>
		);
	}

  render() {
    const { classes, theme, closeDrawer, openState } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !openState && classes.drawerPaperClose),
          }}
          open={openState}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={closeDrawer}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{this._renderProjList()}</List>
        </Drawer>
      </div>
    );
  }
}

ProjectListDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeDrawer: closeDrawer,
    selectProject: selectProject,
  },dispatch);
}
function mapStateToProps(state) {
  return{
		openState: state.uiState.drawerOpen,
		projectList: state.projectState.projectList,
		selectedProject: state.projectState.selectedProject,
  };
}
export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(ProjectListDrawer);