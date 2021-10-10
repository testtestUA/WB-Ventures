import styled from 'styled-components';
import { data } from '../../dataObject';
import Card from './Card';

const Wrapper = styled.section`
  margin: 5rem 0;

  @media (min-width: 50em) {
    margin: 10rem 0;
  }
`;
const Title = styled.p`
  font-size: 3.4rem;
  font-weight: 400;
  text-align: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 5rem;
  margin-top: 5rem;
  @media (min-width: 50em) {
    margin-top: 10rem;
  }
`;

const CardsContainer = () => {
  const { openJobs } = data;
  return (
    <Wrapper className='container_pd'>
      <Title>{openJobs.title}</Title>
      <Container>
        {openJobs.cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default CardsContainer;
