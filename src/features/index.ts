import {createEntityAdapter, createSlice, EntityState, PayloadAction} from '@reduxjs/toolkit'
import {generate as generateRandomStr} from 'randomstring'

export interface Todo {
    id: string
    text: string
    isDone: boolean
    memo: string
}

export interface TodoList {
    list: EntityState<Todo>
}

export const todosAdapter = createEntityAdapter<Todo>({
    selectId: (item) => item.id,
})

const initialState: TodoList = {
    list: todosAdapter.getInitialState(),
}

const GENERATE_RANDOM_STRING_OPTION = 5

const reducers = {
    add: ({list}: TodoList, {payload: {text, isDone}}: PayloadAction<{ text: string, isDone: boolean }>) => {
        const newTodo = {
            id: generateRandomStr(GENERATE_RANDOM_STRING_OPTION),
            text,
            isDone,
            memo: '',
        }

        todosAdapter.addOne(list, newTodo)
    },

    toggle: ({list}: TodoList, {payload: {id, isDone}}: PayloadAction<{ id: string, isDone: boolean }>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                isDone: !isDone,
            },
        })
    },

    delete: ({list}: TodoList, {payload: {id}}: PayloadAction<{ id: string }>) => {
        todosAdapter.removeOne(list, id)
    },

    memo: ({list}: TodoList, {payload: {id, memo}}: PayloadAction<{ id: string, memo: string }>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                memo,
            },
        })
    },
}

export const todoSlice = createSlice({
    reducers,
    initialState,
    name: 'TODOS',
})
