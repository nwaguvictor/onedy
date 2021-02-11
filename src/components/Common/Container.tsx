import styled from 'styled-components'
import React, { ReactNode } from 'react' 

interface ContainerProps{
    children: ReactNode
}

export const Container = ({ children, ...props }: ContainerProps) => {
    return (
        <ContainerStyle {...props}>
            {children}
        </ContainerStyle>
    )
}

const ContainerStyle = styled.div`
    width: 100%;
    min-height: 30vh;
`;
