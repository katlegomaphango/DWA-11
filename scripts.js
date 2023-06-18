//@ts-check

import { decrement, increment, reset } from "./model/actions.js"
import { dispatch, getState, subscribe } from "./model/store.js"

console.log('it works')

subscribe((prev, next) => console.log(next))

//first user story
console.log(getState())

//2nd user story
dispatch(increment(getState().count))
dispatch(increment(getState().count))

//3rd user story
dispatch(decrement(getState().count))

//4th user store
dispatch(reset())