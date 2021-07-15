import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Button, Header, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {CheckboxContainer} from '../container/CheckboxContainer'
import {DeleteButtonContainer} from '../container/DeleteButtonContainer'
import {TextAreaContainer} from '../container/TextAreaContainer'
import {Todo} from '../../features'

interface Props {
    item: Todo,
}

export const TodoItems = ({item}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ItemContainer>
            <CheckboxContainer item={item}/>
            <TextContainer
                style={{textDecoration: item.isDone ? 'line-through' : 'none'}}
                onClick={() => setIsOpen(true)}
            >
                {item.text}
            </TextContainer>
            <DeleteButtonContainer item={item}/>
            <Modal
                open={isOpen}
                closeOnDocumentClick={true}
                onClose={() => setIsOpen(false)}
                size='mini'
            >
                <ModalContentContainer>
                    <TextAreaContainer item={item}/>
                    <br/>
                    <CloseButtonContainer onClick={() => setIsOpen(false)}>
                        닫기
                    </CloseButtonContainer>
                </ModalContentContainer>
            </Modal>
        </ItemContainer>
    )
}

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
})

const TextAreaDivStyle = styled(TextAreaContainer)({
    width: 500,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    resize: 'none',
})

const CloseButtonContainer = styled(Button)({
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
