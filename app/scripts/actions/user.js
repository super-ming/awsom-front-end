// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { ActionTypes } from 'constants/index';

/**
 * Submit Initial Free Trial Form
 * 
 * @returns {Object}
 */

 export function freeTrialInitialPost(form): Object {
   console.log(form)
   return{
    type: ActionTypes.FREE_TRIAL_POST_INITIAL,
    payload: form,
   }
 }
/**
 * Login
 *
 * @returns {Object}
 */
export function login(): Object {
  console.log(request)
  return {
    type: ActionTypes.USER_LOGIN_REQUEST,
    payload: {},
  };
}

/**
 * Logout
 *
 * @returns {Object}
 */
export function logOut(): Object {
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST,
    payload: {},
  };
}
