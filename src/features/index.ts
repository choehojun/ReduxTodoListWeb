import {combineReducers, createAction, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {generate as generateRandomStr} from 'randomstring'

export interface Todo {
    id: string
    text: string
    isDone: boolean
}

export interface TodoList {
    list: Todo[]
}

const initialState: TodoList = {
    list: [],
}

const actionPrefix = 'TODOS'
const addTodos = createAction<object>(`${actionPrefix}/add`)
const GENERATE_RANDOM_STRING_OPTION = 5

const reducers = {
    add: ({list}: TodoList, {payload: {text, isDone}}: PayloadAction<Todo>) => {
        const newTodo = {
            id: generateRandomStr(GENERATE_RANDOM_STRING_OPTION),
            text,
            isDone,
        }

        list.push(newTodo)
    },
}

const todoSlice = createSlice({
    reducers,
    initialState,
    name: actionPrefix,
})

export const selectTodoList = createSelector(
    (state: TodoList) => state.list,
    (list: Todo[]) => list,
)

export const actions = {
    addTodos,
}

export const rootReducer = combineReducers({
    todos: todoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
