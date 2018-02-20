# Photo-Search
React-Native Redux app for searching photos on Pixabay

This app uses the Pixabay api to search for images. Upon searching, it displays a list of images that were found. The user can scroll the list infinitely, and the app will dynamically load more images when the user has almost scrolled to the end of the current results. Each image can be tapped to view more details, such as the author, tags, likes, and more.

The app can be used in portrait or landscape mode, and the number of columns for results found adjust accordingly. Photo-Search was made by Kegan Cunningham using React-Native with Redux.


![PhotoSearch](/app/images/Infinite-Scroll.gif)

```
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
```

![PhotoSearch](/app/images/Photo-Search.gif)

```
search(query) {
  this.props.updateIsLoading(true);
  fetch(query)
    .then((response) => response.json())
    .then((json) => json.hits)
    .then(json => this.handleResponse(json))
    .catch(error => this.props.updateIsLoading(false));
};
```
