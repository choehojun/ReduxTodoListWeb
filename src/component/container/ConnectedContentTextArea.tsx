import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {Todo, todoActions} from '../../features/ducks/TodoDucks'
import {ContentTextArea} from '../presentational/ContentTextArea'

interface Props {
    item: Todo,
}

export const ConnectedContentTextArea = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleTextChange = useCallback((memo: string) => {
        const copyItem = {
            id: item.id,
            memo: memo,
        }
        dispatch(todoActions.memo(copyItem))
    }, [dispatch, item])

    return (
        <ContentTextArea
            value={item.memo}
            onChange={handleTextChange}
        />
    )
}
