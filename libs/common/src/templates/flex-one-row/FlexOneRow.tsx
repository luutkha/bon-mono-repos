import styled from "styled-components";

type Props = {
    children: JSX.Element[]
    customs?: React.CSSProperties
}

const FlexOneRow = ({ children, customs }: Props) => {
    return (
        <Container style={{ ...customs }}>
            {children}
        </Container>
    )
}

export default FlexOneRow

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
`;