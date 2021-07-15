import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
    item: Todo,
}

export const TextAreaContainer = ({item}: Props) => {
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
        <TextArea
            value={item.memo}
            onChange={(e) => {
                handleTextChange(e.target.value)
            }}
        />
    )
}
