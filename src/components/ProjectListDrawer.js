import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';

import { loadIcons } from '../utilities/dynamic_import';
// import SendIcon from '@material-ui/icons/Send';


import { closeDrawer } from '../actions/index';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
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
	state = {
		AsyncComponent: () => <InboxIcon />,
		LoadedComponent: false,
	};

	async componentDidMount() {
		const module = await import('@material-ui/icons/Send');
		const AsyncComponent = module.default;
		const LoadedComponent = true;
		this.setState({ AsyncComponent, LoadedComponent });
	}

	_renderProjList() {
		const { projectList } = this.props;
		const { AsyncComponent, LoadedComponent } = this.state;
		console.log('icon', AsyncComponent);
		const projectListDiv = projectList.map((project) => {
			
			return (
				<ListItem key={project.id} button>
					{LoadedComponent===true ? (<ListItemIcon>
						{AsyncComponent}
					</ListItemIcon>) : ''}
					<ListItemText primary={project['project-name']} />
				</ListItem>
			)
		})
		return (<div>
			{projectListDiv}
		</div>);
		// return (<div>
		// 	<ListItem button>
		// 		<ListItemIcon>
		// 			<InboxIcon />
		// 		</ListItemIcon>
		// 		<ListItemText primary="Inbox" />
		// 	</ListItem>
		// 	<ListItem button>
		// 		<ListItemIcon>
		// 			<StarIcon />
		// 		</ListItemIcon>
		// 		<ListItemText primary="Starred" />
		// 	</ListItem>
		// 	<ListItem button>
		// 		<ListItemIcon>
		// 			<SendIcon />
		// 		</ListItemIcon>
		// 		<ListItemText primary="Send mail" />
		// 	</ListItem>
		// 	<ListItem button>
		// 		<ListItemIcon>
		// 			<DraftsIcon />
		// 		</ListItemIcon>
		// 		<ListItemText primary="Drafts" />
		// 	</ListItem>
		// </div>);
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
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
  },dispatch);
}
function mapStateToProps(state) {
  return{
		openState: state.uiState.drawerOpen,
		projectList: state.projectState.projectList,
  };
}
export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(ProjectListDrawer);