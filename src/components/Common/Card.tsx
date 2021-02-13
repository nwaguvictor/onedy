import styled from "styled-components/macro"
interface ICard {
    title: string,
    icon: any,
    className: string
}

export const Card: React.FC<ICard> = ({className, children, title, icon}) => {
    return (
        <Container className={className}>
            <CardIcon src={icon} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDesc>{children}</CardDesc>
        </Container>
    )
}

// Card Styles
const Container = styled.div`
    width: 25rem;
    height: auto;
    padding: 3rem 3.5rem;
    display: flex;
    background-color: var(--clr-white);
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    border: 1.5px solid var(--clr-cloud);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`;

const CardIcon = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 3px solid var(--clr-cloud);
    margin-bottom: 2rem;
    color: var(--clr-primary);
`;

const CardTitle = styled.h3`
    font-family: inherit;
    font-weight: 700;
    font-size: 1.6rem;
`;

const CardDesc = styled.p`
    font-size: 1.2rem;
`;