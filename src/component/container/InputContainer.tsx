import {useDispatch} from 'react-redux'
import React, {ChangeEvent, useCallback} from 'react'
import {todoSlice} from '../../features'
import {Input} from 'semantic-ui-react'

interface Props {
    inputText: string,
    setInputText: (text: string) => void,
}

export const InputContainer = ({inputText, setInputText}: Props) => {
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
        <Input
            type='text'
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyDown}
            placeholder='할 일을 입력하세요.'
        />
    )
}
