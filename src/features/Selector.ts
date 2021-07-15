import {EntityState, createSelector} from '@reduxjs/toolkit'
import {Todo, TodoList, todosAdapter} from './index'

const {selectAll} = todosAdapter.getSelectors()

export const selectTodoList = createSelector(
    (state: TodoList) => state.list,
    (list: EntityState<Todo>) => selectAll(list),
)

export const selectNotDoneTodoList = createSelector(
    (state: TodoList) => state.list,
    (list: EntityState<Todo>) => selectAll(list).filter((item) => item.isDone === false)
)
