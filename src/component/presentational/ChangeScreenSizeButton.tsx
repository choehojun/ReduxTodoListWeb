import {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
    isLarge: boolean,
    onClick: ReturnType<typeof useCallback>
}


export const ChangeScreenSizeButton = ({isLarge, onClick}: Props) => {
    return (
        <ButtonContainer onClick={onClick}>
            {isLarge ? '작은화면' : '큰화면'}
        </ButtonContainer>
    )
}

const ButtonContainer = styled(Button) ({
  width: 100,
  height: 50,
})
