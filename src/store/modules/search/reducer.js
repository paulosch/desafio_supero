const INITIAL_STATE = {
  data: null,
  error: false,
  loading: false,
  textSearch: '',
  itemsPerPage: 18,
  page: 1,
  totalItems: 0,
  type: null,
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
    case '@search/ALTER_SEARCH_TYPE':
      return { ...state, type: action.payload.type };
    default:
      return state;
  }
}
