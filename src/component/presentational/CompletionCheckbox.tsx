import React from 'react'
import {Checkbox} from 'semantic-ui-react'

interface Props {
    checked: boolean,
    onChange: ReturnType<any>
}

export const CompletionCheckbox = ({checked, onChange}: Props) => {
    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
        />
    )
}
