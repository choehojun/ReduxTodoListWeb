import React, {useCallback} from 'react'
import {TextArea} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
    value: string
    onChange: ReturnType<typeof useCallback>
}

export const TitleTextArea = ({value, onChange}: Props) => {
    return (
        <TextAreaContainer
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='할 일을 입력하세요.'
        />
    )
}

const TextAreaContainer = styled(TextArea) ({
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
})
