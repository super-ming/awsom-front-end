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
export function* freeTrialInitialPost(payload) {
  console.log('Stuff: ',payload)
  // try {
  //   const response = yield call(request, `https://api.github.com/search/repositories?q=${payload.query}&sort=stars`);
  //   yield put({
  //     type: ActionTypes.GITHUB_GET_REPOS_SUCCESS,
  //     payload: { data: response.items },
  //   });
  // }
  // catch (err) {
  //   /* istanbul ignore next */
  //   yield put({
  //     type: ActionTypes.GITHUB_GET_REPOS_FAILURE,
  //     payload: err,
  //   });
  // }
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
