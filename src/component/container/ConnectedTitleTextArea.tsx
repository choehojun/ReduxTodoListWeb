import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TitleTextArea} from '../presentational/TitleTextArea'

interface Props {
    item: Todo,
}

export const ConnectedTitleTextArea = ({item}: Props) => {
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
        <TitleTextArea
            value={item.text}
            onChange={handleTextChange}
        />
    )
}
