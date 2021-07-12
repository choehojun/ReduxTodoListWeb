import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {Checkbox, Button} from 'semantic-ui-react'
import {actions, Todo} from '../features'
import {useDispatch} from 'react-redux'

interface Props {
    item: Todo
}

export const TodoItems = ({item}: Props) => {
    const dispatch = useDispatch()

    const handleCheckboxChange = useCallback((item: Todo) => {
        dispatch(actions.toggleTodos(item))
    }, [dispatch])

    const handleButtonClick = useCallback((item: Todo) => {
        dispatch(actions.deleteTodos(item))
    }, [dispatch])

    return (
        <ItemContainer>
            <Checkbox onChange={handleCheckboxChange.bind({}, item)}/>
            <text
                style={{
                    textDecoration: item.isDone ? 'line-through' : 'none',
                    fontSize: 15,
                    fontWeight: 'normal',
                    width: 125,
                    textAlign: 'start',
                    marginLeft: 10,
                }}
            >
                {item.text}
            </text>
            <Button onClick={handleButtonClick.bind({}, item)}>
                삭제
            </Button>
        </ItemContainer>
    )
}

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
})
