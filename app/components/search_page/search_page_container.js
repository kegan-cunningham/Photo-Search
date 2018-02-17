import { connect } from 'react-redux';
import SearchPage from './search_page';
import { updateSearchString, updateIsLoading, setImages } from '../../actions/actions.js';

const mapStateToProps = (state) => {
  return {
    searchString: state.searchString,
    isLoading: state.isLoading,
    pageNumber: state.pageNumber,
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchString: (searchString) => dispatch(updateSearchString(searchString)),
    updateIsLoading: (bool) => dispatch(updateIsLoading(bool)),
    setImages: (images) => dispatch(setImages(images)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
