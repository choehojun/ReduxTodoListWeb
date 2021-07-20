import React, {useCallback} from 'react'
import {Checkbox} from 'semantic-ui-react'

interface Props {
    checked: boolean,
    onChange: ReturnType<typeof useCallback>
}

export const CompletionCheckbox = ({checked, onChange}: Props) => {
    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
        />
    )
}
