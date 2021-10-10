import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 300px;
  height: 120px;
  flex-grow: 1;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.image});
  @media (min-width: 37.5em) {
    width: 350px;
  }
`;
const Title = styled.p`
  display: grid;
  place-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  color: #fff;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.633);
`;

const Card = ({ title, image }) => {
  return (
    <Wrapper image={image}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;
