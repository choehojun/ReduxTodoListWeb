import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {todoSlice} from '../../features'
import {Button} from 'semantic-ui-react'

interface Props {
    inputText: string,
    setInputText: (text: string) => void,
}

export const SubmitButtonContainer = ({inputText, setInputText}: Props) => {
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

    return <Button onClick={handleButtonClick}>제출</Button>
}
