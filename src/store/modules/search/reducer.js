const INITIAL_STATE = {
  data: null,
  book: null,
  error: false,
  loading: false,
  textSearch: '',
  itemsPerPage: 21,
  page: 1,
  totalItems: 0,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@search/SEARCH_REQUEST':
      return {
        ...state,
        textSearch: action.payload.text,
        page: action.payload.page,
        loading: true,
      };
    case '@search/SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        totalItems: action.payload.data.totalItems,
      };
    case '@search/SEARCH_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
