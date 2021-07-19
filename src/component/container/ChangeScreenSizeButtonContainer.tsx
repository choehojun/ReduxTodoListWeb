import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {Button} from 'semantic-ui-react'

interface Props {
    item: Todo,
    style: React.CSSProperties,
}

export const ChangeScreenSizeButtonContainer = ({item, style}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoSlice.actions.changeScreenSize(item))
    }, [dispatch, item])

    return (
        <Button
            style={style}
            onClick={handleButtonClick}
        >
            {item.isLarge ? '작은화면' : '큰화면'}
        </Button>
    )
}
