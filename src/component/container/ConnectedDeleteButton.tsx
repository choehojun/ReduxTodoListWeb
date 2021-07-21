import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features/ducks/TodoDucks'
import {DeleteButton} from '../presentational/DeleteButton'

interface Props {
    item: Todo
}

export const ConnectedDeleteButton = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        if(window.confirm('정말 삭제하시겠습니까?')) {
            dispatch(todoSlice.actions.delete(item))
        }
    }, [dispatch, item])

    return (
        <DeleteButton onClick={handleButtonClick}/>
    )
}
