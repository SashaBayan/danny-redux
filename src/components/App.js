import React from 'react';
import { connect } from 'react-redux'

const App = React.createClass({
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1> Danny likes class </h1>
        <h2> jk </h2>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(App);
