import styled from 'styled-components';
import Image from 'next/image';
import { data } from '../dataObject';
import Link from 'next/link';

const Wrapper = styled.section`
  display: grid;
  padding: 0 2.3rem;
  * {
    color: #292e3a;
  }
  @media (min-width: 70em) {
    grid-template-columns: auto auto;
    align-items: flex-start;
    padding: 0 16.4rem;
    gap: 5rem;
  }
`;

const Container = styled.div`
  margin-top: 5.4rem;
  display: grid;
  place-items: center;
  @media (min-width: 70em) {
    place-items: ${(props) => props.left && 'unset'};
    margin-top: 10rem;
  }
`;

const Button = styled.div`
  width: 100%;
  margin-top: 5rem;
  font-weight: 400;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #bdbdbd;
  * {
    color: #2f80ed;
  }
  @media (min-width: 50em) {
    max-width: 255px;
  }
`;

const ButtonText = styled.p`
  font-size: 2.2rem;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 3.4rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-top: 4.5rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  max-width: 488px;
  @media (min-width: 70em) {
    text-align: ${(props) => props.left && 'unset'};
  }
`;

const LogoContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 5.1rem;
  @media (min-width: 70em) {
    margin-top: 15rem;
  }
`;

const About = () => {
  const { about } = data;

  return (
    <Wrapper id='about'>
      <Container left>
        <Title>{about.title}</Title>
        <Text left dangerouslySetInnerHTML={{ __html: about.content }} />
        <Button>
          <Link
            href='mailto: info@wbventuresnv.com?subject=About WB Ventures N.V. '
            target='_blank'
          >
            <ButtonText>{about.redirect.text}</ButtonText>
          </Link>
        </Button>
      </Container>
      <Container>
        <Title>{about.subtitle}</Title>
        <LogoContainer>
          <Image alt='logo' src='/winxbet.png' width='164px' height='41px' />
          <Image alt='logo' src='/betbase.png' width='120px' height='34px' />
        </LogoContainer>
      </Container>
    </Wrapper>
  );
};

export default About;
