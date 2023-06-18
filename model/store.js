//@ts-check

import { Action } from "./actions.js"
import { reducer } from "./reducers.js"

/**
 * @typedef {object} Counter
 * @prop {number} value
 */
export const Counter = {}

/**
 * @typedef {object} State
 * @prop {Counter} count
 */
export const State = {}

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


/**
 * 
 * @returns {State}
 */
export const getState = () => {
    return Object.freeze({ ...states[0]})
}


/**
 * 
 * @param {Action} action 
 */
export const dispatch = (action) => {
    const prev = getState()
    const next = reducer(prev, action)

    subscribers.forEach(item => item(prev, next))

    states.unshift(next)
}


/**
 * 
 * @param {Subscription} subscription 
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)

    const unsubscribe = () => {
        const newSubs = subscribers.filter(item => item !== subscription)
        subscribers = newSubs
    }

    return unsubscribe
}


/**
 * @typedef {object} Store
 * @prop {GetState} getState
 * @prop {Subscription} subscribe
 * @prop {Dispatch} dispatch
 */