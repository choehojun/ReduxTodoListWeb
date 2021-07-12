import React, {ChangeEvent, useCallback, useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'

const TodosAddInput = () => {
    const [inputText, setInputText] = useState("")
    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }, [setInputText])
    return (
        <DivContainer>
            <Input
                type='text'
                value={inputText}
                onChange={handleInputChange}
                placeholder='할일을 입력하세요.'
            />
            <Button onClick={() => setInputText("")}>제출</Button>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export default TodosAddInput
