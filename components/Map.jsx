import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  height: 200px;
  @media (min-width: 40em) {
    height: 600px;
  }
`;

const Map = () => {
  return (
    <Iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7154.865201788621!2d-68.91341205221838!3d12.097223504475421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e84827932036833%3A0x256045ee083a7e40!2s51%20Heelsumstraat%2C%20Willemstad%2C%20Cura%C3%A7ao!5e0!3m2!1str!2sua!4v1633873578118!5m2!1str!2sua'
      width='100%'
      style={{ border: 0 }}
      allowFullScreen
      loading='lazy'
    ></Iframe>
  );
};

export default Map;
