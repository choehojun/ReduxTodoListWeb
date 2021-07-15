import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {StyledTitleTextArea} from '../presentational/TodoItems'

interface Props {
    item: Todo,
}

export const TitleTextAreaContainer = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleTextChange = useCallback((text: string) => {
        const copyItem = {
            id: item.id,
            text: text,
            isDone: item.isDone,
            memo: item.memo,
        }
        dispatch(todoSlice.actions.changeTitle(copyItem))
    }, [dispatch, item])

    return (
        <StyledTitleTextArea
            value={item.text}
            onChange={(e) => {
                handleTextChange(e.target.value)
            }}
        />
    )
}
