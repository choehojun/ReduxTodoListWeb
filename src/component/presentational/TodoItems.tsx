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
    const [isLarge, setIsLarge] = useState(false)

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
            <Modal
                open={isOpen}
                closeOnDocumentClick={true}
                onClose={handleClose}
                size={isLarge ? 'large' : 'mini'}
                style={{height: isLarge ? 900 : 500}}
            >
                <ModalHeaderContainer>
                    <TitleTextAreaContainer item={item}/>
                </ModalHeaderContainer>
                <ModalContentContainer style={{height: isLarge ? 873 : 433}}>
                    <ContentTextAreaContainer item={item}/>
                    <CloseButtonContainer onClick={handleClose}>
                        닫기
                    </CloseButtonContainer>
                    <ChangeScreenSizeButtonContainer onClick={() => setIsLarge(prev => !prev)}>
                        {isLarge ? '작은화면' : '큰화면'}
                    </ChangeScreenSizeButtonContainer>
                </ModalContentContainer>
            </Modal>
        </ItemContainer>
    )
}

const ModalHeaderContainer = styled.div({
    height: 27,
})

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
})

const CloseButtonContainer = styled(Button)({
    width: 100,
    height: 50,
})

const ChangeScreenSizeButtonContainer = styled(Button)({
    width: 100,
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
