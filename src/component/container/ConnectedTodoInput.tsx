import {useDispatch} from 'react-redux'
import {ChangeEvent, useCallback} from 'react'
import {todoActions} from '../../features/ducks/TodoDucks'
import {TodoInput} from '../presentational/TodoInput'

interface Props {
    inputText: string,
    setInputText: (text: string) => void,
}

const ENTER_KEY_CODE = 13

export const ConnectedTodoInput = ({inputText, setInputText}: Props) => {
    const dispatch = useDispatch()

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }, [setInputText])

    const handleEnterKeyDown = useCallback((e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
            if (inputText.trim() === '') {
                alert('할 일을 입력해주세요.')
                return
            }
            dispatch(todoActions.add({
                title: inputText,
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
