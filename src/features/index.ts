import {
    combineReducers,
    createAction,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit'
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

const todosAdapter = createEntityAdapter<Todo>({
    selectId: (item) => item.id,
})

const {selectAll} = todosAdapter.getSelectors()

const initialState: TodoList = {
    list: todosAdapter.getInitialState(),
}

const actionPrefix = 'TODOS'
const addTodos = createAction<object>(`${actionPrefix}/add`)
const toggleTodos = createAction<object>(`${actionPrefix}/toggle`)
const deleteTodos = createAction<object>(`${actionPrefix}/delete`)
const memoTodos = createAction<object>(`${actionPrefix}/memo`)

const GENERATE_RANDOM_STRING_OPTION = 5

const reducers = {
    add: ({list}: TodoList, {payload: {text, isDone}}: PayloadAction<Todo>) => {
        const newTodo = {
            id: generateRandomStr(GENERATE_RANDOM_STRING_OPTION),
            text,
            isDone,
            memo: '',
        }

        todosAdapter.addOne(list, newTodo)
    },

    toggle: ({list}: TodoList, {payload: {id, isDone}}: PayloadAction<Todo>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                isDone: !isDone,
            },
        })
    },

    delete: ({list}: TodoList, {payload: {id}}: PayloadAction<Todo>) => {
        todosAdapter.removeOne(list, id)
    },

    memo: ({list}: TodoList, {payload: {id, memo}}: PayloadAction<Todo>) => {
        todosAdapter.updateOne(list, {
            id,
            changes: {
                memo,
            },
        })
    },
}

const todoSlice = createSlice({
    reducers,
    initialState,
    name: actionPrefix,
})

export const selectTodoList = createSelector(
    (state: TodoList) => state.list,
    (list: EntityState<Todo>) => selectAll(list),
)

export const actions = {
    addTodos,
    toggleTodos,
    deleteTodos,
    memoTodos,
}

export const rootReducer = combineReducers({
    todos: todoSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
