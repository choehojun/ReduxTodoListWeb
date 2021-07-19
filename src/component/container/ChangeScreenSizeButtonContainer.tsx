import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {StyledChangeScreenSizeButtonContainer} from '../presentational/TodoItems'

interface Props {
    item: Todo
}

export const ChangeScreenSizeButtonContainer = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.changeScreenSize(item))
    }, [dispatch, item])

    return (
        <StyledChangeScreenSizeButtonContainer onClick={handleButtonClick}>
            {item.isLarge ? '작은화면' : '큰화면'}
        </StyledChangeScreenSizeButtonContainer>
    )
}
