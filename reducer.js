import merge from 'lodash/merge';

const Reducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'PORTRAIT':
      return merge({}, state, { orientation: 'portrait' });
    case 'LANDSCAPE':
      return merge({}, state, { orientation: 'landscape' });
    default:
      return state
  }
}

export default Reducer;
