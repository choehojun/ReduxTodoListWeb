import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {todoSlice} from '../../features/ducks/TodoDucks'
import {SubmitButton} from '../presentational/SubmitButton'

interface Props {
    inputText: string,
    setInputText: (text: string) => void,
}

export const ConnectedSubmitButton = ({inputText, setInputText}: Props) => {
    const dispatch = useDispatch()

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

    return <SubmitButton onClick={handleButtonClick}/>
}
