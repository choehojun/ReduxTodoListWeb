import {useCallback} from 'react'
import {Button} from 'semantic-ui-react'

interface Props {
    onClick: ReturnType<typeof useCallback>
}

export const DeleteAllButton = ({onClick}: Props) => {
    return (
        <Button
            onClick={onClick}
            color='red'
        >
            전체 삭제
        </Button>
    )
}
