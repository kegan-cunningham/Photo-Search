import { connect } from 'react-redux';
import SearchResults from './search_results';
import { updateIsLoading, loadMoreImages } from '../../actions/actions.js';

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    pageNumber: state.pageNumber,
    searchString: state.searchString,
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIsLoading: (bool) => dispatch(updateIsLoading(bool)),
    loadMoreImages: (images) => dispatch(loadMoreImages(images)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
