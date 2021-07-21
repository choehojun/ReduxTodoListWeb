import {combineReducers} from '@reduxjs/toolkit'
import {todoReducer} from '../ducks/TodoDucks'

export const rootReducer = combineReducers({
    todos: todoReducer,
})
export type RootState = ReturnType<typeof rootReducer>
