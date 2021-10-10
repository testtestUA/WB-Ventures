import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  color: #828282;
  transition: 0.4s;
  width: 255px;
  min-height: 260px;
  padding: 2.4rem;
  flex-grow: 1;
  &:hover {
    color: #ffffff;
    background: #2f80ed;
  }
  @media (min-width: 90em) {
    height: 500px;
  }
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 6rem;
`;
const Text = styled.p`
  margin-top: 1.2rem;
  font-size: 3rem;
  text-transform: uppercase;
  max-width: 200px;
  text-align: center;
  line-height: 3rem;
  @media (min-width: 90em) {
    margin-top: 4.9rem;
  }
`;

const Card = ({ title, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Card;
