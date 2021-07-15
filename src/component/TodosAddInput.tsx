import React, {ChangeEvent, useCallback, useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux'
import {todoSlice} from '../features'

const TodosAddInput = () => {
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }, [setInputText])

    const handleButtonClick = useCallback(() => {
        if (!inputText.trim()) {
            alert('할 일을 입력해주세요.')
            return
        }
        dispatch(todoSlice.actions.add({
            text: inputText,
            isDone: false,
        }))
        setInputText('')
    }, [dispatch, inputText, setInputText])

    const handleEnterKeyDown = useCallback((e) => {
        if (e.keyCode === 13) {
            if (!inputText.trim()) {
                alert('할 일을 입력해주세요.')
                return
            }
            dispatch(todoSlice.actions.add({
                text: inputText,
                isDone: false,
            }))
            setInputText('')
        }
    }, [dispatch, inputText, setInputText])

    return (
        <DivContainer>
            <Input
                type='text'
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyDown}
                placeholder='할 일을 입력하세요.'
            />
            <Button onClick={handleButtonClick}>제출</Button>
        </DivContainer>
    )
}

const DivContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
})

export default TodosAddInput
