import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import { openDrawer } from '../actions/index';


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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});
	


class AppHeader extends React.Component {

  render() {
    const { classes, openDrawer, openState } = this.props;
		console.log('appbar props', this.props);
    return (
      <div className={classes.root}>
        <AppBar
				position="absolute"
				className={classNames(classes.appBar, openState && classes.appBarShift)}
			>
				<Toolbar disableGutters={!openState}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={openDrawer}
						className={classNames(classes.menuButton, openState && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" noWrap>
						Kevin McGovern's Portfolio
					</Typography>
				</Toolbar>
			</AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openDrawer: openDrawer,
  },dispatch);
}
function mapStateToProps(state) {
  return{
    openState: state.uiState.drawerOpen,
  };
}
export default compose(
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps)
)(AppHeader);