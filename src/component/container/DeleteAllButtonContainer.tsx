import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {todoSlice} from '../../features'
import {Button} from 'semantic-ui-react'

export const DeleteAllButtonContainer = () => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.deleteAll())
    }, [dispatch])

    return (
        <Button onClick={handleButtonClick}>전체 삭제</Button>
    )
}
