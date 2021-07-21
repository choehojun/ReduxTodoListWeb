import {useCallback} from 'react'
import {TextArea} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
    value: string,
    onChange: ReturnType<typeof useCallback>,
}

export const ContentTextArea = ({value, onChange}: Props) => {
    return (
        <TextAreaContainer
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='메모를 입력하세요.'
        />
    )
}

const TextAreaContainer = styled(TextArea)({
    width: '100%',
    height: '91.5%',
    marginBottom: 10,
    resize: 'none',
})
