import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';

import api from '../../../services/api';

import { searchSuccess, searchFailure } from './actions';

const getSearch = (state) => state.search;

export function* search({ payload }) {
  try {
    const { itemsPerPage, totalItems } = yield select(getSearch);

    const { text, page } = payload;
    const startIndex = (page - 1) * itemsPerPage;

    const params = `?q=${text}&startIndex=${startIndex}&maxResults=${itemsPerPage}`;
    console.tron.log(params);
    const response = yield call(api.get, params);
    const { data } = response;

    if (page > 1) data.totalItems = totalItems;

    yield put(searchSuccess(data));
  } catch (err) {
    yield put(searchFailure());
  }
}

export default all([takeLatest('@search/SEARCH_REQUEST', search)]);
