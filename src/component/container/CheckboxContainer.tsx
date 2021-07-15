import {useDispatch} from 'react-redux'
import React, {useCallback} from 'react'
import {Todo, todoSlice} from '../../features'
import {Checkbox} from 'semantic-ui-react'

interface Props {
    item: Todo,
}

export const CheckboxContainer = ({item}: Props) => {
    const dispatch = useDispatch()
    const handleCheckboxChange = useCallback(() => {
        dispatch(todoSlice.actions.toggle(item))
    }, [dispatch, item])

    return (
        <Checkbox
            checked={item.isDone}
            onChange={handleCheckboxChange}
        />
    )
}
