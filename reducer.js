import merge from 'lodash/merge';
import { UPDATE_SEARCH_STRING, UPDATE_IS_LOADING, SET_IMAGES, LOAD_MORE_IMAGES } from './actions';

const initialState = {
  searchString: '',
  isLoading: false,
  pageNumber: 1,
  images: [],
}

const Reducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return merge({}, state, { searchString: action.searchString });
    case UPDATE_IS_LOADING:
      return merge({}, state, { isLoading: action.isLoading });
    case SET_IMAGES:
      return merge({}, state, { pageNumber: 1, images: action.images });
    case LOAD_MORE_IMAGES:
      return merge({}, state, { pageNumber: (state.pageNumber + 1), images: state.images.concat(action.images) });
    default:
      return state
  }
}

export default Reducer;
