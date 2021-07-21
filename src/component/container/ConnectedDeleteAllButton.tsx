import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {todoSlice} from '../../features/ducks/TodoDucks'
import {DeleteAllButton} from '../presentational/DeleteAllButton'

export const ConnectedDeleteAllButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        if(window.confirm('모든 항목이 삭제됩니다. 정말 삭제하시겠습니까?')) {
            dispatch(todoSlice.actions.deleteAll())
        }
    }, [dispatch])

    return (
        <DeleteAllButton onClick={handleButtonClick}/>
    )
}
