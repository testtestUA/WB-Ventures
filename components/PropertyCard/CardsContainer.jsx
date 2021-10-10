import styled from 'styled-components';
import { data } from '../../dataObject';
import Card from './Card';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 12.5rem;
`;

const CardsContainer = () => {
  const { properties } = data;
  return (
    <Wrapper id='numbers' className='container_pd'>
      {properties.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default CardsContainer;
