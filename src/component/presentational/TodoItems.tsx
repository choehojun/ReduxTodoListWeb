import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Button, Modal, TextArea} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {CheckboxContainer} from '../container/CheckboxContainer'
import {DeleteButtonContainer} from '../container/DeleteButtonContainer'
import {ContentTextAreaContainer} from '../container/ContentTextAreaContainer'
import {TitleTextAreaContainer} from '../container/TitleTextAreaContainer'
import {Todo} from '../../features'

interface Props {
    item: Todo,
}

export const TodoItems = ({item}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        if(!item.text.trim()) {
            alert('할 일을 입력해주세요.')
            return
        }

        setIsOpen(false)
    }

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
            <ModalContainer
                open={isOpen}
                closeOnDocumentClick={true}
                onClose={handleClose}
                size='large'
            >
                <ModalHeaderContainer>
                    <TitleTextAreaContainer item={item}/>
                </ModalHeaderContainer>
                <ModalContentContainer>
                    <ContentTextAreaContainer item={item}/>
                    <CloseButtonContainer onClick={handleClose}>
                        닫기
                    </CloseButtonContainer>
                </ModalContentContainer>
            </ModalContainer>
        </ItemContainer>
    )
}

const ModalContainer = styled(Modal)({
    height: 900,
})

const ModalHeaderContainer = styled.div({
    height: '3%',
})

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
    height: '97%',
})

const CloseButtonContainer = styled(Button)({
    width: 80,
    height: 50,
})

const TextContainer = styled.div({
    fontSize: 15,
    fontWeight: 'normal',
    width: 125,
    textAlign: 'start',
    marginLeft: 10,
})

export const StyledContentTextArea = styled(TextArea)({
    width: '100%',
    height: '91.5%',
    marginBottom: 10,
    resize: 'none',
})

export const StyledTitleTextArea = styled(TextArea)({
    width: '100%',
    resize: 'none',
    border: 'none',
})
