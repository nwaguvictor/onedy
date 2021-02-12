import * as React from 'react'
import styled from "styled-components"

// Component
export const Button: React.FC<ButtonProps> = ({className, children, ...props}) => {
    return (
        <StyledButton className={className} {...props}>
            {children}
        </StyledButton>
    )
}

// Interface
interface ButtonProps{
    children: React.ReactNode;
    className?: string;
    outline?: boolean;
}

// Component Styles
const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    font: inherit;
    padding: .6rem 2.4rem;
    border-radius: 4px;
    border: 1px solid var(--clr-primary);
    color: ${({ outline }) => outline ? colors['outline']['fg'] : colors['default']['fg'] };
    background: ${({ outline }) => outline ? colors['outline']['bg'] : colors['default']['bg'] };
    outline: none;
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        color: var(--clr-white);
        background: var(--clr-primary);
    }
`;

// Props
const colors = {
    default: {
        bg: `var(--clr-primary)`,
        fg: `var(--clr-white)`
    },
    outline: {
        bg: 'transparent',
        fg: `var(--clr-primary)`
    }
}

