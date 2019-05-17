/**
 * createReducer function is a reducers factory
 * it gets initial state and handler and returns reducer
 * see Generating Reducers section in https://redux.js.org/recipes/reducingboilerplate
 * this article might also be useful: https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/
 * @param initialState {object|null} - initial state
 * @param handlers {object} - reducer handlers
 * @returns {object} - new state
 */
const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default createReducer;
