import React from 'react'
import styled from '@emotion/styled'
import {Todo} from '../../features'
import {useSelector} from 'react-redux'
import {TodoItems} from './TodoItems'
import {Header} from 'semantic-ui-react'
import {RootState} from '../../features/Root'
import {selectTodoList, selectNotDoneTodoList} from '../../features/Selector'

const TodosList = () => {
    const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todos))
    const notDoneTodoListLength = useSelector<RootState, Todo[]>(state => selectNotDoneTodoList(state.todos)).length

    return (
        <DivContainer>
            <Header as='h1'>할 일 목록</Header>
            <Header as='h2'>끝내지 못한 일의 개수: {notDoneTodoListLength}</Header>
            {todoList.map((item: Todo) => (
                <TodoItems item={item}/>
            ))}
        </DivContainer>
    )
}

const DivContainer = styled.div({
    textAlign: 'center',
})

export default TodosList
