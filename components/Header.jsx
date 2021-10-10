import styled from 'styled-components';
import Image from 'next/image';
import { data } from '../dataObject';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  color: #fff;
  padding: 2.4rem 2.3rem;
  @media (min-width: 50em) {
    padding: 4.9rem 10rem;
  }
`;

const HamburgerContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  cursor: pointer;
  @media (min-width: 50em) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
  display: none;
  grid-auto-flow: column;
  gap: 20px;
  @media (min-width: 50em) {
    display: grid;
  }
`;
const NavButton = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 0.6rem;
`;

const LogoContainer = styled.div``;

const Header = () => {
  const { header } = data;
  return (
    <Wrapper>
      <LogoContainer>
        <Image src='/logomob.png' width='124px' height='11.55px' />
      </LogoContainer>
      <HamburgerContainer>
        <Hamburger />
        <Hamburger />
        <Hamburger />
      </HamburgerContainer>
      <NavbarContainer>
        {header.map((item, index) => (
          <NavButton key={index}>{item.name}</NavButton>
        ))}
      </NavbarContainer>
    </Wrapper>
  );
};

export default Header;
