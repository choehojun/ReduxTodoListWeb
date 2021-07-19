import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features/ducks/TodoDucks'
import {CompletionCheckbox} from '../presentational/CompletionCheckbox'

interface Props {
    item: Todo,
}

export const ConnectedCompletionCheckbox = ({item}: Props) => {
    const dispatch = useDispatch()
    const handleCheckboxChange = useCallback(() => {
        dispatch(todoSlice.actions.toggle(item))
    }, [dispatch, item])

    return (
        <CompletionCheckbox
            checked={item.isDone}
            onChange={handleCheckboxChange}
        />
    )
}
