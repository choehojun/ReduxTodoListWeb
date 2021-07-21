import {Todo} from '../../features/ducks/TodoDucks'
import {Button, Modal} from 'semantic-ui-react'
import {ConnectedTitleTextArea} from '../container/ConnectedTitleTextArea'
import {ConnectedContentTextArea} from '../container/ConnectedContentTextArea'
import {ConnectedChangeScreenSizeButton} from '../container/ConnectedChangeScreenSizeButton'
import styled from '@emotion/styled'

interface Props {
    item: Todo,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

export const MemoModal = ({item, isOpen, setIsOpen}: Props) => {

    const handleClose = () => {
        if (item.title.trim() === '') {
            alert('할 일을 입력해주세요.')
            return
        }

        setIsOpen(false)
    }

    return (
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
    )
}

const ModalHeaderContainer = styled.div({
    height: 27,
})

const ModalContentContainer = styled.div({
    textAlign: 'center',
})

const CloseButtonContainer = styled(Button)({
    width: 100,
    height: 50,
})
