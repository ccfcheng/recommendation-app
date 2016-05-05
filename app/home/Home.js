import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import { logoutUser } from '../auth/AuthFacebook';

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
      this.props.dispatch(logoutUser());
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
            onTouchTap={() => {this.props.handleMenuClick('/recommendations');}}
            primaryText="Home"
            leftIcon={<ActionHome/>}
          />
          <MenuItem
            onTouchTap={() => {this.props.handleMenuClick('/search');}}
            primaryText="Search"
            leftIcon={<ActionSearch/>}
          />
          <MenuItem
            onTouchTap={() => {this.props.handleMenuClick('/history');}}
            primaryText="History"
            leftIcon={<ActionHistory/>}
          />
          <MenuItem
            onTouchTap={() => {this.props.handleMenuClick('/profile');}}
            primaryText="Profile"
            leftIcon={<ActionIdentity/>}
          />
          <MenuItem
            onTouchTap={() => {this.props.handleMenuClick('/');}}
            primaryText="Sign out"
            leftIcon={<ActionExit/>}
          />
        </Drawer>

        <AppBar
          style={styles.navBar}
          title={<div style={styles.title}>local flavr</div>}
          iconElementLeft={
            <IconButton onClick={this.props.handleToggle}>
              <NavMenu />
            </IconButton>}
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

export default connect()(HomeContainer);
