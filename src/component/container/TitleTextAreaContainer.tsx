import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {TextArea} from 'semantic-ui-react'

interface Props {
    item: Todo,
    style: React.CSSProperties
}

export const TitleTextAreaContainer = ({item, style}: Props) => {
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
        <TextArea
            style={style}
            value={item.text}
            onChange={(e) => {
                handleTextChange(e.target.value)
            }}
        />
    )
}
