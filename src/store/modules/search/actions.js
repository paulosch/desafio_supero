export function searchRequest(text, page) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { text, page },
  };
}

export function searchSuccess(data) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: { data },
  };
}

export function searchFailure(err) {
  return {
    type: '@search/SEARCH_FAILURE',
    payload: { err },
  };
}
