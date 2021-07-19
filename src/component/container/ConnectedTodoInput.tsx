import {useDispatch} from 'react-redux'
import React, {ChangeEvent, useCallback} from 'react'
import {todoSlice} from '../../features/ducks/TodoDucks'
import {TodoInput} from '../presentational/TodoInput'

interface Props {
    inputText: string,
    setInputText: (text: string) => void,
}

export const ConnectedTodoInput = ({inputText, setInputText}: Props) => {
    const dispatch = useDispatch()

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }, [setInputText])

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
        <TodoInput
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyDown}
        />
    )
}
