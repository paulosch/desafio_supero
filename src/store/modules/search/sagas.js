import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';

import api from '../../../services/api';

import { searchRequest, searchSuccess, searchFailure } from './actions';

const getSearch = (state) => state.search;

export function* search() {
  try {
    const {
      itemsPerPage, textSearch, page, type,
    } = yield select(getSearch);

    const startIndex = (page - 1) * itemsPerPage;

    let params = `?q=${textSearch}&startIndex=${startIndex}&maxResults=${itemsPerPage}`;
    if (type && type.value !== 'all') params += `&filter=${type.value}`;

    const response = yield call(api.get, params);
    const { data } = response;

    yield put(searchSuccess(data));
  } catch (err) {
    yield put(searchFailure());
  }
}

export function* alterType() {
  const { textSearch, page } = yield select(getSearch);
  if (textSearch) yield put(searchRequest(textSearch, page));
}

export default all([
  takeLatest('@search/SEARCH_REQUEST', search),
  takeLatest('@search/ALTER_SEARCH_TYPE', alterType),
]);
