import React from 'react'
import { createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer'

let rootReducer = combineReducers({
    userReducer,
})

export default rootReducer