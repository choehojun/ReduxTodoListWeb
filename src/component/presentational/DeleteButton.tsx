import React from 'react'
import {Button} from 'semantic-ui-react'

interface Props {
    onClick: ReturnType<any>
}

export const DeleteButton = ({onClick}: Props) => {
    return (
        <Button
            onClick={onClick}
            color='red'
        >
            삭제
        </Button>
    )
}
