import React from 'react'
import {Container} from 'semantic-ui-react'
import TodosList from './component/TodosList'
import TodosAddInput from './component/TodosAddInput'

const Main = () => {
    return (
        <Container>
            <TodosList />
            <TodosAddInput />
        </Container>
    )
}

export default Main
