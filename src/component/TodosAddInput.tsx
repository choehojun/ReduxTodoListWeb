import React from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodosAddInput = () => {
    return (
        <DivContainer>
            <Input
                type='text'
                placeholder='할일을 입력하세요.'
            />
            <Button>제출</Button>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export default TodosAddInput
