import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {Checkbox, Button, TextArea, Modal} from 'semantic-ui-react'
import {todoSlice, Todo} from '../features'
import {useDispatch} from 'react-redux'

interface Props {
    item: Todo
}

export const TodoItems = ({item}: Props) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const handleCheckboxChange = useCallback((item: Todo) => {
        dispatch(todoSlice.actions.toggle(item))
    }, [dispatch])

    const handleButtonClick = useCallback((item: Todo) => {
        dispatch(todoSlice.actions.delete(item))
    }, [dispatch])

    const handleTextChange = useCallback((memo: string, item: Todo) => {
        const copyItem = {
            id: item.id,
            text: item.text,
            isDone: item.isDone,
            memo: memo,
        }
        dispatch(todoSlice.actions.memo(copyItem))
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
            <ModalContainer
                open={isOpen}
                closeOnDocumentClick={true}
                onClose={() => setIsOpen(false)}
            >
                <ModalContentContainer>
                    <TextAreaContainer
                        value={item.memo}
                        onChange={(e) => {
                            handleTextChange(e.target.value, item)
                        }}
                    />
                    <br/>
                    <ButtonContainer onClick={() => setIsOpen(false)}>
                        닫기
                    </ButtonContainer>
                </ModalContentContainer>
            </ModalContainer>
        </ItemContainer>
    )
}

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
})

const ModalContainer = styled(Modal)({
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
})

const TextAreaContainer = styled(TextArea)({
    width: 500,
    height: 300,
})

const ButtonContainer = styled(Button)({
    width: 100,
    height: 50,
    fontSize: 20,
})

const TextContainer = styled.div({
    fontSize: 15,
    fontWeight: 'normal',
    width: 125,
    textAlign: 'start',
    marginLeft: 10,
})
