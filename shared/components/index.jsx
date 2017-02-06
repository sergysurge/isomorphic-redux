import React, { Component, PropTypes } from 'react';

export default class MainView extends Component {
  static propTypes = {
    children: PropTypes.object
  };
  

  render() {
    console.log(this.props)
    return (
      <div id="main-view">
        <h1>Todos: main-view</h1>

        <hr />

        {this.props.children}
      </div>
    );
  }
}
