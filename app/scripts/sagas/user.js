import { request } from 'modules/client';

/**
 * @module Sagas/User
 * @desc User
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';


/**
 * Login
 *
 * @param {Object} action
 *
 */
export function* freeTrialInitialPost(data) {
  const options = {
    method: 'POST',
    payload: data.payload,
  };
  console.log('inisde FreeTial: ',process.env)
  try {
    const response = yield call(request, `${process.env.REACT_APP_API_URL}/api/free-trial-request`, options);
    yield put({
      type: ActionTypes.FREE_TRIAL_POST_INITIAL_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.FREE_TRIAL_POST_INITIAL_FAILURE,
      payload: err,
    });
  }
}
/**
 * Login
 */
export function* login() {
  console.log("login")
  try {
    yield call(delay, 400);

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN_REQUEST, login),
    takeLatest(ActionTypes.USER_LOGOUT_REQUEST, logout),
    takeLatest(ActionTypes.FREE_TRIAL_POST_INITIAL, freeTrialInitialPost),
  ]);
}
