import React from 'react'
import styled from '@emotion/styled'
import {selectTodoList, RootState, Todo} from '../features'
import {useSelector} from 'react-redux'
import {TodoItems} from './TodoItems'
import {Header} from 'semantic-ui-react'

const TodosList = () => {
    const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todos))

    return (
        <DivContainer>
            <Header as='h1'>할 일 목록</Header>
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
