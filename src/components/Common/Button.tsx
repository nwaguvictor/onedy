import * as React from 'react'
import styled from "styled-components"

// Component
export const Button: React.FC<ButtonProps> = ({ className, children, ...restProps }) => {
    const { iconLeft, iconRight } = restProps;
    return (
        <StyledButton className={className} {...restProps}>
            {iconLeft && <ButtonIcon>{iconLeft}</ButtonIcon>}
            <ButtonText>{children}</ButtonText>
            {iconRight && <ButtonIcon>{iconRight}</ButtonIcon>}
        </StyledButton>
    )
}

// Interface
interface ButtonProps{
    children: React.ReactNode;
    className?: string;
    outline?: boolean;
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
}

// Component Styles
const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
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

const ButtonIcon = styled.div`
    margin-top: .35rem;
    color: currentColor;
    fill: currentColor;
`;

const ButtonText = styled.p`
    padding: 0 .5rem;
    margin-bottom: 0;
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

