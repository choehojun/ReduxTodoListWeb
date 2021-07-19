import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features/ducks/TodoDucks'
import {ContentTextArea} from '../presentational/ContentTextArea'

interface Props {
    item: Todo,
}

export const ConnectedContentTextArea = ({item}: Props) => {
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
        <ContentTextArea
            value={item.memo}
            onChange={handleTextChange}
        />
    )
}
