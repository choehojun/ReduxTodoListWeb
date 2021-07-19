import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Button, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {CheckboxContainer} from '../container/CheckboxContainer'
import {DeleteButtonContainer} from '../container/DeleteButtonContainer'
import {ContentTextAreaContainer} from '../container/ContentTextAreaContainer'
import {TitleTextAreaContainer} from '../container/TitleTextAreaContainer'
import {ChangeScreenSizeButtonContainer} from '../container/ChangeScreenSizeButtonContainer'
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
                size={item.isLarge ? 'large' : 'mini'}
                style={{height: item.isLarge ? 900 : 500}}
            >
                <ModalHeaderContainer>
                    <TitleTextAreaContainer
                        item={item}
                        style={Styles.titleTextArea}
                    />
                </ModalHeaderContainer>
                <ModalContentContainer style={{height: item.isLarge ? 873 : 433}}>
                    <ContentTextAreaContainer
                        item={item}
                        style={Styles.contentTextArea}
                    />
                    <CloseButtonContainer onClick={handleClose}>
                        닫기
                    </CloseButtonContainer>
                    <ChangeScreenSizeButtonContainer
                        item={item}
                        style={Styles.changeScreenSizeButton}
                    />
                </ModalContentContainer>
            </Modal>
        </ItemContainer>
    )
}

const Styles: { [key: string]: React.CSSProperties } = {
    contentTextArea: {
        width: '100%',
        height: '91.5%',
        marginBottom: 10,
        resize: 'none',
    },

    titleTextArea: {
        width: '100%',
        resize: 'none',
        border: 'none',
    },

    changeScreenSizeButton: {
        width: 100,
        height: 50,
    },
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
    width: 125,
    textAlign: 'start',
    marginLeft: 10,
})
