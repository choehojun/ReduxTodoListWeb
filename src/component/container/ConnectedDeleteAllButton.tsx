import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {todoSlice} from '../../features'
import {DeleteAllButton} from '../presentational/DeleteAllButton'

export const ConnectedDeleteAllButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.deleteAll())
    }, [dispatch])

    return (
        <DeleteAllButton onClick={handleButtonClick}/>
    )
}
