import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';

const App = React.createClass({
  render() {
    const todos = this.props.todos.map((todo) => <h3> {todo.text} </h3>)
    return (
      <div>
        <h1> Danny likes class </h1>
        <h2> jk </h2>

        <button onClick={ () => this.props.dispatch(todoActions.addTodo('ADD ME')) }> PRESS THIS TO ADD TODO </button>
        {todos}
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
