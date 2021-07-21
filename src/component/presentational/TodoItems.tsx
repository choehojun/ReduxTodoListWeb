import {useState} from 'react'
import styled from '@emotion/styled'
import 'semantic-ui-css/semantic.min.css'
import {ConnectedCompletionCheckbox} from '../container/ConnectedCompletionCheckbox'
import {ConnectedDeleteButton} from '../container/ConnectedDeleteButton'
import {Todo} from '../../features/ducks/TodoDucks'
import {MemoModal} from './MemoModal'

interface Props {
    item: Todo,
}

export const TodoItems = ({item}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMouseOver, setIsMouseOver] = useState<boolean>()

    return (
        <ItemContainer>
            <ConnectedCompletionCheckbox item={item}/>
            <TextContainer
                style={{
                    textDecoration: item.isDone ? 'line-through' : 'none',
                    backgroundColor: isMouseOver ? 'lightgray' : 'transparent',
                    color: isMouseOver ? 'white' : 'black',
                }}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                onClick={() => setIsOpen(true)}
            >
                {item.title}
            </TextContainer>
            <ConnectedDeleteButton item={item}/>
            <MemoModal
                item={item}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </ItemContainer>
    )
}

const ItemContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
})

const TextContainer = styled.div({
    fontSize: 18,
    fontWeight: 'bold',
    width: 250,
    textAlign: 'start',
    marginLeft: 10,
    wordBreak: 'break-word',
    padding: 5,
})
