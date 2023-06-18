//@ts-check

import { Action } from "./actions.js"

/**
 * @typedef {object} Counter
 * @prop {number} value
 */
export const Counter = {}

/**
 * @typedef {object} State
 * @prop {Counter} count
 */

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = []

/**
 * @type {Array<State>}
 */
let states = [{
    count: {
        value: 0
    }
}]

