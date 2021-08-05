import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {Todo, todoActions} from '../../features/ducks/TodoDucks'
import {CompletionCheckbox} from '../presentational/CompletionCheckbox'

interface Props {
    item: Todo,
}

export const ConnectedCompletionCheckbox = ({item}: Props) => {
    const dispatch = useDispatch()
    const handleCheckboxChange = useCallback(() => {
        dispatch(todoActions.toggle(item))
    }, [dispatch, item])

    return (
        <CompletionCheckbox
            checked={item.isDone}
            onChange={handleCheckboxChange}
        />
    )
}
