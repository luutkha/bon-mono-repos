import styled from "styled-components";

type Props = {
    children: JSX.Element[] | JSX.Element;
    customs?: React.CSSProperties
}

const FlexOneColumn = ({ children, customs }: Props) => {
    return (
        <Container style={{ ...customs }}>
            {children}
        </Container>
    )
}

export default FlexOneColumn

const Container = styled.div`
display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
flex-wrap: wrap;
`;