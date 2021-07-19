import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {ChangeScreenSizeButton} from '../presentational/ChangeScreenSizeButton'

interface Props {
    item: Todo,
}

export const ConnectedChangeScreenSizeButton = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.changeScreenSize(item))
    }, [dispatch, item])

    return (
        <ChangeScreenSizeButton
            isLarge={item.isLarge}
            onClick={handleButtonClick}
        />
    )
}
