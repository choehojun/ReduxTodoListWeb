import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {Button} from 'semantic-ui-react'

interface Props {
    item: Todo
}

export const DeleteButtonContainer = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.delete(item))
    }, [dispatch, item])

    return (
        <Button onClick={handleButtonClick}>
            삭제
        </Button>
    )
}
