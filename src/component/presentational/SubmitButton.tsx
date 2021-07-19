import React from 'react'
import {Button} from 'semantic-ui-react'

interface Props {
    onClick: ReturnType<any>
}

export const SubmitButton = ({onClick}: Props) => {
    return <Button onClick={onClick}>제출</Button>
}
