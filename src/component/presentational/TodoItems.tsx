import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Button, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {ConnectedCompletionCheckbox} from '../container/ConnectedCompletionCheckbox'
import {ConnectedDeleteButton} from '../container/ConnectedDeleteButton'
import {ConnectedContentTextArea} from '../container/ConnectedContentTextArea'
import {ConnectedTitleTextArea} from '../container/ConnectedTitleTextArea'
import {ConnectedChangeScreenSizeButton} from '../container/ConnectedChangeScreenSizeButton'
import {Todo} from '../../features'

interface Props {
    item: Todo,
}

export const TodoItems = ({item}: Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        if (!item.text.trim()) {
            alert('할 일을 입력해주세요.')
            return
        }

        setIsOpen(false)
    }

    return (
        <ItemContainer>
            <ConnectedCompletionCheckbox item={item}/>
            <TextContainer
                style={{textDecoration: item.isDone ? 'line-through' : 'none'}}
                onClick={() => setIsOpen(true)}
            >
                {item.text}
            </TextContainer>
            <ConnectedDeleteButton item={item}/>
            <Modal
                open={isOpen}
                closeOnDocumentClick={true}
                onClose={handleClose}
                size={item.isLarge ? 'large' : 'mini'}
                style={{height: item.isLarge ? 900 : 500}}
            >
                <ModalHeaderContainer>
                    <ConnectedTitleTextArea
                        item={item}
                    />
                </ModalHeaderContainer>
                <ModalContentContainer style={{height: item.isLarge ? 873 : 433}}>
                    <ConnectedContentTextArea
                        item={item}
                    />
                    <CloseButtonContainer onClick={handleClose}>
                        닫기
                    </CloseButtonContainer>
                    <ConnectedChangeScreenSizeButton
                        item={item}
                    />
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

const TextContainer = styled.div({
    fontSize: 15,
    fontWeight: 'normal',
    width: 250,
    textAlign: 'start',
    marginLeft: 10,
    wordBreak: 'break-word',
})
