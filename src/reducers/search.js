const initialSearch = {
  searchText: '',
  movies: [],
  fetching: false,
  nextPage: 2
}
const search = (state = initialSearch, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return {
        ...state,
        // fetching: true
      }
    case 'RECIEVE_SEARCH':
      if (action.isScrolling) {
        return {
          ...state,
          movies: [...state.movies, ...action.movies],
          // fetchingScroll: false,
          nextPage: state.nextPage + 1,
          endScrolling: action.endScrolling
        }
      } else {
        return {
          ...state,
          movies: action.movies,
          fetching: false,
          nextPage: 2
        }
      }
    case 'EMPTY_SEARCH':
      return {
        ...state,
        fetching: false
      }
    case 'EDIT_TEXT':
      return {
        ...state,
        searchText: action.text
      }
    default:
      return state
  }
}

export default search;
