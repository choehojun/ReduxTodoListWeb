import React from 'react'
import {Container} from 'semantic-ui-react'
import TodosList from './component/presentational/TodosList'
import TodosAddInput from './component/presentational/TodosAddInput'

const Main = () => {
    return (
        <Container>
            <TodosList/>
            <TodosAddInput/>
        </Container>
    )
}

export default Main
