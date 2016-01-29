import { expect } from 'chai';
import reducer from './index';

describe('Reducer', () => {
  it('adds a TODO', () => {
    const newState = reducer([], { type: 'ADD_TODO', text: 'add dat todo' })
    expect(newState).to.deep.equal( [{text: 'add dat todo', completed: false}] )
  })
})
