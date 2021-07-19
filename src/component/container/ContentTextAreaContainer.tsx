import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
    item: Todo,
    style: React.CSSProperties,
}

export const ContentTextAreaContainer = ({item, style}: Props) => {
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
            style={style}
            value={item.memo}
            onChange={(e) => {
                handleTextChange(e.target.value)
            }}
        />
    )
}
