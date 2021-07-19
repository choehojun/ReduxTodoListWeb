import {combineReducers} from '@reduxjs/toolkit'
import {todoSlice} from '../ducks/TodoDucks'

export const rootReducer = combineReducers({
    todos: todoSlice.reducer,
})
export type RootState = ReturnType<typeof rootReducer>
