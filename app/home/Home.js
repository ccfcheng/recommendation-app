import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import Database from '../database/Database';
import { FIREBASE_URL } from '../appConstants';

const DB = new Database(FIREBASE_URL);

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleDrawer(open) {
    this.setState({open});
  }

  handleMenuClick(path) {
    browserHistory.push(path);
    this.setState({open: false});
    if (path === '/') {
      DB.logout();
    }
  }

  render() {
    return (
      <Home
        open={this.state.open}
        handleToggle={this.handleToggle}
        handleDrawer={this.handleDrawer}
        handleMenuClick={this.handleMenuClick}
        childNodes={this.props.children}
        path={this.props.path}
      />
    );
  }
}

class Home extends Component {

  render() {
    return (
      <div>

        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleDrawer(open)}
        >
          <MenuItem
            onTouchTap={() => this.props.handleMenuClick('/favorites')}
            primaryText="Favorites"
            leftIcon={<ActionFavorite/>}
          />
          <MenuItem
            onTouchTap={() => this.props.handleMenuClick('/profile')}
            primaryText="Profile"
            leftIcon={<ActionIdentity/>}
          />
          <MenuItem
            onTouchTap={() => this.props.handleMenuClick('/')}
            primaryText="Sign out"
            leftIcon={<ActionExit/>}
          />
        </Drawer>

        <AppBar
          style={styles.navBar}
          title={<div style={styles.title}>{this.props.path}</div>}
          iconElementLeft={
            <IconButton onClick={this.props.handleToggle}>
              <NavMenu />
            </IconButton>
          }
          iconElementRight={
            <IconButton onClick={() => this.props.handleMenuClick('/search')}>
              <ActionSearch/>
            </IconButton>
          }
        />

        {this.props.childNodes}

      </div>
    );
  }
}

const styles = {
  navBar: {
    height: '54px',
    top: '-6px',
    position: 'fixed',
  },

  content: {
    marginTop: '54px',
  },

  title: {
    textAlign: 'center',
  },
};

function mapStateToProps(state) {
  return {
    path: state.app.path,
  };
}

export default connect(mapStateToProps)(HomeContainer);
