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
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`)
const deleteTodos = createAction<object>(`${actionPrefix}/delete`)

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

    toggle: ({list}: TodoList, {payload: {id, isDone}}: PayloadAction<Todo>) => {
        const targetIndex = list.findIndex((item: Todo) => item.id === id)

        list[targetIndex].isDone = !isDone
    },

    delete: ({list}: TodoList, {payload: {id}}: PayloadAction<Todo>) => {
        const targetIndex = list.findIndex((item: Todo) => item.id === id)

        list.splice(targetIndex, 1)
    }
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
    toggleTodos,
    deleteTodos,
}

export const rootReducer = combineReducers({
    todos: todoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
