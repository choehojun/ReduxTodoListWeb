import React from 'react'
import {Header} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {TodoItems} from './TodoItems'

const TodosList = () => {
    return (
        <DivContainer>
            <Header as='h1'>할 일 목록</Header>
            <TodoItems text='시장 가기' />
            <TodoItems text='공부 하기' />
            <TodoItems text='잠 자기' />
        </DivContainer>
    )
}

const DivContainer = styled.div({
    textAlign: 'center',
})

export default TodosList
