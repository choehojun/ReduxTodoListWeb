import React from 'react'
import {TextArea} from 'semantic-ui-react'
import styled from '@emotion/styled'

interface Props {
    value: string
    onChange: ReturnType<any>
}

export const TitleTextArea = ({value, onChange}: Props) => {
    return (
        <TextAreaContainer
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

const TextAreaContainer = styled(TextArea) ({
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
})
