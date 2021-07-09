import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Checkbox, Button} from 'semantic-ui-react'

interface Props {
    text: string
}

export const TodoItems = ({text}: Props) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <ItemContainer>
            <Checkbox
                onChange={() => {
                    setIsChecked(prev => !prev)
                }}
            />
            <text
                style={{
                    textDecoration: isChecked ? 'line-through' : 'none',
                    fontSize: 15,
                    fontWeight: 'normal',
                    width: 125,
                    textAlign: 'start',
                    marginLeft: 10,
                }}
            >
                {text}
            </text>
            <Button>삭제</Button>
        </ItemContainer>
    )
}

const ItemContainer = styled.header({
    display: 'flex',
    justifyContent: 'center',
})
