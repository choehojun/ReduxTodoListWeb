import React from 'react'
import {Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodosList = () => {
    return (
        <DivContainer>
            <Header as='h1'>할 일 목록</Header>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    textAlign: 'center',
})

export default TodosList
