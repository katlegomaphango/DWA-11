//@ts-check

import { Counter } from "./store.js";

/**
 * Increment the counter by 1
 * 
 * @typedef {object} Increment
 * @prop {'ADD'} type
 * @prop {Counter} counter
 */

/**
 * Decrement the counter by 1
 * 
 * @typedef {object} Decrement
 * @prop {'SUBTRACT'} type
 * @prop {Counter} counter
 */

/**
 * Reset the counter to 0
 * 
 * @typedef {object} Reset
 * @prop {'RESET'} type
 * @prop {Counter} counter
 */

/**
 * @typedef { Increment | Decrement | Reset } Action
 */
export const Action = {}

/**
 * @param {object} props
 * @param {number} props.value
 * @returns {Increment}
 */
export const increment = (props) => {
    const { value } = props

    return {
        type: 'ADD',
        counter: {
            value: value + 1
        }
    }
}

/**
 * @param {object} props
 * @param {number} props.value
 * @returns {Decrement}
 */
export const decrement = (props) => {
    const { value } = props

    return {
        type: 'SUBTRACT',
        counter: {
            value: value - 1
        }
    }
}

/**
 * @returns {Reset}
 */
export const reset = () => {
    return {
        type: 'RESET',
        counter: {
            value: 0
        }
    }
}