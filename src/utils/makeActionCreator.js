/**
 * makeActionCreator function are getting action type and data and
 * returns function that returns action creator object
 * Source code was taken from official documentation:
 * Generating Action Creators https://redux.js.org/recipes/reducingboilerplate
 * @param type {string} - action type
 * @param argNames - array of action data
 * @returns {function(...[*]): {type: *}}
 */
const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };

  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });

  return action;
};

export default makeActionCreator;
