import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {Checkbox, Button, TextArea} from 'semantic-ui-react'
import {actions, Todo} from '../features'
import {useDispatch} from 'react-redux'
import Modal from 'react-modal'

interface Props {
    item: Todo
}

export const TodoItems = ({item}: Props) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const handleCheckboxChange = useCallback((item: Todo) => {
        dispatch(actions.toggleTodos(item))
    }, [dispatch])

    const handleButtonClick = useCallback((item: Todo) => {
        dispatch(actions.deleteTodos(item))
    }, [dispatch])

    const handleTextChange = useCallback((memo: string) => {
        const copyItem = {
            id: item.id,
            memo: memo,
        }
        dispatch(actions.memoTodos(copyItem))
    }, [dispatch])

    return (
        <ItemContainer>
            <Checkbox
                checked={item.isDone}
                onChange={handleCheckboxChange.bind({}, item)}
            />
            <TextContainer
                style={{textDecoration: item.isDone ? 'line-through' : 'none'}}
                onClick={() => setIsOpen(true)}
            >
                {item.text}
            </TextContainer>
            <Button onClick={handleButtonClick.bind({}, item)}>
                삭제
            </Button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            >
                <ModalContentContainer>
                    <TextAreaContainer
                        value={item.memo}
                        onChange={(e) => {
                            handleTextChange(e.target.value)
                        }}
                    />
                    <ButtonContainer onClick={() => setIsOpen(false)}>
                        닫기
                    </ButtonContainer>
                </ModalContentContainer>
            </Modal>
        </ItemContainer>
    )
}

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
})

const TextAreaContainer = styled(TextArea)({
    width: 1060,
    height: 600,
})

const ButtonContainer = styled(Button)({
    width: 100,
    height: 50,
    fontSize: 20,
})

const TextContainer = styled.text({
    fontSize: 15,
    fontWeight: 'normal',
    width: 125,
    textAlign: 'start',
    marginLeft: 10,
})
