import { all } from "redux-saga/effects";

import search from "./search/reducer";

export default function* rootSaga() {
  return yield all([search]);
}
