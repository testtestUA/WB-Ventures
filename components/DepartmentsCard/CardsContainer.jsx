import styled from 'styled-components';
import { data } from '../../dataObject';
import Card from './Card';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  background: #f2f2f2;
  margin-top: 10rem;
  padding-bottom: 8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const Title = styled.p`
  margin: 5rem 0;
  font-size: 3.4rem;
  font-weight: 400;
`;

const CardsContainer = () => {
  const { departments } = data;

  return (
    <Wrapper id='careers' className='container_pd'>
      <Title>{departments.title}</Title>
      <Container>
        {departments.cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default CardsContainer;
