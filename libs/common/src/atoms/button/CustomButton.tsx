import React from 'react'
import { CustomButtonContainer } from './common'

type Props = { children: JSX.Element }

const CustomButton = ({ children }: Props & React.HTMLProps<HTMLButtonElement>) => {
    return (
        <CustomButtonContainer>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton