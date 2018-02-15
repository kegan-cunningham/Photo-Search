export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING';
export const UPDATE_ORIENTATION = 'UPDATE_ORIENTATION';

export const updateSearchString = (searchString) => ({
  type: UPDATE_SEARCH_STRING,
  searchString,
});

export const updateIsLoading = (bool) => ({
  type: UPDATE_IS_LOADING,
  bool,
});

export const updateOrientation = (orientation) => ({
  type: UPDATE_ORIENTATION,
  orientation,
});
