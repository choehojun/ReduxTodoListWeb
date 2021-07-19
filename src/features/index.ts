import {createEntityAdapter, createSlice, EntityState, PayloadAction} from '@reduxjs/toolkit'
import {generate as generateRandomStr} from 'randomstring'

export interface Todo {
    id: string
    text: string
    isDone: boolean
    memo: string
    isLarge: boolean
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
            isLarge: false,
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

    deleteAll: ({list}: TodoList) => {
        todosAdapter.removeAll(list)
    },

    memo: ({list}: TodoList, {payload: {id, memo}}: PayloadAction<{ id: string, memo: string }>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                memo,
            },
        })
    },

    changeTitle: ({list}: TodoList, {payload: {id, text}}: PayloadAction<{ id: string, text: string }>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                text,
            },
        })
    },

    changeScreenSize: ({list}: TodoList, {payload: {id, isLarge}}: PayloadAction<{ id: string, isLarge: boolean }>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                isLarge: !isLarge,
            },
        })
    },
}

export const todoSlice = createSlice({
    reducers,
    initialState,
    name: 'TODOS',
})
