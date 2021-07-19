import React, {useState} from 'react'
import styled from '@emotion/styled'
import {ConnectedTodoInput} from '../container/ConnectedTodoInput'
import {ConnectedSubmitButton} from '../container/ConnectedSubmitButton'
import {ConnectedDeleteAllButton} from '../container/ConnectedDeleteAllButton'

const TodosAddInput = () => {
    const [inputText, setInputText] = useState('')

    return (
        <DivContainer>
            <ConnectedTodoInput
                inputText={inputText}
                setInputText={setInputText}
            />
            <ConnectedSubmitButton
                inputText={inputText}
                setInputText={setInputText}
            />
            <ConnectedDeleteAllButton/>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export default TodosAddInput
