import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {StyledContentTextArea} from '../presentational/TodoItems'

interface Props {
    item: Todo,
}

export const ContentTextAreaContainer = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleTextChange = useCallback((memo: string) => {
        const copyItem = {
            id: item.id,
            text: item.text,
            isDone: item.isDone,
            memo: memo,
        }
        dispatch(todoSlice.actions.memo(copyItem))
    }, [dispatch, item])

    return (
        <StyledContentTextArea
            value={item.memo}
            onChange={(e) => {
                handleTextChange(e.target.value)
            }}
        />
    )
}
