import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {Todo, todoActions} from '../../features/ducks/TodoDucks'
import {ChangeScreenSizeButton} from '../presentational/ChangeScreenSizeButton'

interface Props {
    item: Todo,
}

export const ConnectedChangeScreenSizeButton = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        dispatch(todoActions.changeScreenSize(item))
    }, [dispatch, item])

    return (
        <ChangeScreenSizeButton
            isLarge={item.isLarge}
            onClick={handleButtonClick}
        />
    )
}
