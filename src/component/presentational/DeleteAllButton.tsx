import React from 'react'
import {Button} from 'semantic-ui-react'

interface Props {
    onClick: ReturnType<any>
}

export const DeleteAllButton = ({onClick}: Props) => {
    return <Button onClick={onClick}>전체 삭제</Button>
}
