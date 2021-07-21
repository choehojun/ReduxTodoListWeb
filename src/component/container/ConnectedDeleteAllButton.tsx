import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
import {todoActions} from '../../features/ducks/TodoDucks'
import {DeleteAllButton} from '../presentational/DeleteAllButton'

export const ConnectedDeleteAllButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = useCallback(() => {
        if(window.confirm('모든 항목이 삭제됩니다. 정말 삭제하시겠습니까?')) {
            dispatch(todoActions.deleteAll())
        }
    }, [dispatch])

    return (
        <DeleteAllButton onClick={handleButtonClick}/>
    )
}
