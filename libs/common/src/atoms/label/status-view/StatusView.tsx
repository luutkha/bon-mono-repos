import styled from "styled-components";
type Props = {
  title?: string;
  status?: string;
  customContainerStyles?: React.CSSProperties;
}

const StatusView = ({ title = 'title', status = 'status', customContainerStyles }: Props) => {
  return (
    <Container style={{ ...customContainerStyles }}>
      <Title>{title}</Title>
      <Content>{status}</Content>
    </Container>
  )
}

export default StatusView

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  border: 2px solid #f0e9ff;
  border-radius: 10px;
  &:hover {
    border: 2px solid #6924fc;

    cursor: pointer;
  }
  `;
export const Title = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
export const Content = styled.div`
font-family: 'UTM Avo Bold';
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
