// @ts-check

import { State } from "./store.js";
import { Action } from "./actions.js";


/**
 * 
 * @param {State} state 
 * @param {Action} action 
 * @returns {State}
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                count: {
                    value: state.count.value
                }
            }
        }

        case 'SUBTRACT': {
            return {
                ...state,
                count: {
                    value: state.count.value
                }
            }
        }

        case 'RESET': {
            return {
                count: {
                    value: 0
                }
            }
        }
    
        default: return state
    }
}