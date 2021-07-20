import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'

interface Props {
    onClick: ReturnType<typeof useCallback>
}

export const SubmitButton = ({onClick}: Props) => {
    return (
        <Button
            onClick={onClick}
            color='green'
        >
            제출
        </Button>
    )
}
