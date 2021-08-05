import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {Todo, todoActions} from '../../features/ducks/TodoDucks'
import {TitleTextArea} from '../presentational/TitleTextArea'

interface Props {
    item: Todo,
}

export const ConnectedTitleTextArea = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleTextChange = useCallback((title: string) => {
        const copyItem = {
            id: item.id,
            title: title,
        }
        dispatch(todoActions.changeTitle(copyItem))
    }, [dispatch, item])

    return (
        <TitleTextArea
            value={item.title}
            onChange={handleTextChange}
        />
    )
}
