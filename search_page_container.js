import { connect } from 'react-redux';
import SearchPage from './search_page';
import { updateSearchString, updateIsLoading } from './actions.js';

const mapStateToProps = (state) => {
  return {
    searchString: state.searchString,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchString: (searchString) => dispatch(updateSearchString(searchString)),
    updateIsLoading: (bool) => dispatch(updateIsLoading(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
