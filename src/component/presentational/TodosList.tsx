import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {Todo} from '../../features/ducks/TodoDucks'
import {useSelector} from 'react-redux'
import {TodoItems} from './TodoItems'
import {Button, Header} from 'semantic-ui-react'
import {RootState} from '../../features/store/Store'
import {selectTodoList, selectNotDoneTodoList, selectDoneTodoList} from '../../features/selector/TodoSelector'

const TodosList = () => {
    const todoList = useSelector<RootState, Todo[]>(state => selectTodoList(state.todos))
    const notDoneTodoList = useSelector<RootState, Todo[]>(state => selectNotDoneTodoList(state.todos))
    const doneTodoList = useSelector<RootState, Todo[]>(state => selectDoneTodoList(state.todos))

    const [activeTab, setActiveTab] = useState(0)

    const clickHandler = useCallback((id: number) => {
        setActiveTab(id)
    }, [setActiveTab])

    const filteredItemsArray = [
        todoList.map((item: Todo) => (
            <TodoItems item={item}/>
        )),
        notDoneTodoList.map((item: Todo) => (
            <TodoItems item={item}/>
        )),
        doneTodoList.map((item: Todo) => (
            <TodoItems item={item}/>
        )),
    ]

    return (
        <DivContainer>
            <Header as='h1'>할 일 목록</Header>
            <Header as='h2'>끝내지 못한 일의 개수: {notDoneTodoList.length}</Header>
            <TabContainer>
                <Button
                    onClick={() => clickHandler(0)}
                    color={activeTab === 0 ? 'blue' : 'grey'}
                >
                    ALL
                </Button>
                <Button
                    onClick={() => clickHandler(1)}
                    color={activeTab === 1 ? 'blue' : 'grey'}
                >
                    NOT DONE
                </Button>
                <Button
                    onClick={() => clickHandler(2)}
                    color={activeTab === 2 ? 'blue' : 'grey'}
                >
                    DONE
                </Button>
            </TabContainer>
            {filteredItemsArray[activeTab]}
        </DivContainer>
    )
}

const DivContainer = styled.div({
    textAlign: 'center',
})

const TabContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
})

export default TodosList
