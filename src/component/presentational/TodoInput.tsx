import {useCallback} from 'react'
import {Input} from 'semantic-ui-react'

interface Props {
    value: string,
    onChange: ReturnType<typeof useCallback>
    onKeyDown: ReturnType<typeof useCallback>
}

export const TodoInput = ({value, onChange, onKeyDown}: Props) => {
    return (
        <Input
            type='text'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder='할 일을 입력하세요.'
        />
    )
}
