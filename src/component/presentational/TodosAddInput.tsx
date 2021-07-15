import React, {useState} from 'react'
import styled from '@emotion/styled'
import {InputContainer} from '../container/InputContainer'
import {SubmitButtonContainer} from '../container/SubmitButtonContainer'

const TodosAddInput = () => {
    const [inputText, setInputText] = useState('')

    return (
        <DivContainer>
            <InputContainer
                inputText={inputText}
                setInputText={setInputText}
            />
            <SubmitButtonContainer inputText={inputText} setInputText={setInputText}/>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export default TodosAddInput
