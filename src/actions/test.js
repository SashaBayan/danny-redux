import { expect } from 'chai';
import { addTodo } from './todoActions'

describe('addTodo', () => {
  it('returns a new state object', () => {
    const newState = addTodo('foo');
    expect(newState).to.deep.equal({text: 'foo', type: 'ADD_TODO'})
  })
})
