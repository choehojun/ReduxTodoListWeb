import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {DeleteButton} from '../presentational/DeleteButton'

interface Props {
    item: Todo
}

export const ConnectedDeleteButton = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.delete(item))
    }, [dispatch, item])

    return (
        <DeleteButton onClick={handleButtonClick}/>
    )
}
