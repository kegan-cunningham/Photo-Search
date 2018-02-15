import merge from 'lodash/merge';
import { UPDATE_SEARCH_STRING, UPDATE_IS_LOADING } from './actions';

const initialState = {
  searchString: '',
  isLoading: false,
}

const Reducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return merge({}, state, { searchString: action.searchString });
    case UPDATE_IS_LOADING:
      return merge({}, state, { isLoading: action.isLoading });
    default:
      return state
  }
}

export default Reducer;
