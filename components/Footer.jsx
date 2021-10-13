import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../dataObject';

const Wrapper = styled.footer`
  background: #000000;
`;

const Padding = styled.div`
  padding: 5rem 1rem 4rem 1rem;
  display: grid;
  place-items: center;
  @media (min-width: 70em) {
    grid-auto-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 7rem;
    padding: 2.6rem 2rem 4.5rem 2rem;
  }
`;

const UnOrderedList = styled.ul`
  margin-top: 4rem;
  display: grid;
  gap: 2rem;
  color: #f2f2f2;
  list-style: none;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  @media (min-width: 70em) {
    grid-template-columns: auto auto;
    margin-top: unset;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  border-bottom: 1px dashed #333333;
  width: 90vw;
  padding-bottom: 2rem;
  transition: 0.3s;
  &:hover {
    opacity: 60%;
  }
  @media (min-width: 70em) {
    width: 100%;
    text-align: left;
    padding-bottom: 1rem;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 3.5rem;
  gap: 0.5rem;
  @media (min-width: 70em) {
    margin-top: unset;
  }
`;
const ContactContainer = styled.div`
  display: flex;
`;
const ContactText = styled.p`
  color: #f2f2f2;
  font-weight: ${(props) => (props.bold ? '700' : '400')};
`;

const SocialWrapper = styled.div`
  margin-top: 3.5rem;
  display: grid;
  place-items: center;
  p {
    color: #f2f2f2;
    font-weight: 700;
  }

  div {
    margin-top: 2.3rem;
    display: flex;
    gap: 1.5rem;
  }

  i {
    color: #f2f2f2;
    font-size: 2.8rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 60%;
    }
  }
  @media (min-width: 70em) {
    margin-top: 0rem;
    div {
      margin-top: 0rem;
    }
  }
`;

const Text = styled.p`
  color: #f2f2f2;
  font-weight: 300;
  margin-top: 2.5rem;
  @media (min-width: 70em) {
    margin-top: 0rem;
  }
`;

const LicenseWrapper = styled.div`
  background: #333333;
  text-align: center;
  padding: 1.9rem 2.8rem;
`;

const LicenseText = styled.p`
  color: #f2f2f2;
  line-height: 21px;
`;

const Footer = () => {
  const { footer } = data;
  const { list, contact, copyright, license, social } = footer;
  return (
    <Wrapper>
      <Padding>
        <Image alt='' width='153px' height='67px' src={'/logoblack.png'} />
        <UnOrderedList>
          {list.map((item, index) => (
            <ListItem key={index}>{item.name}</ListItem>
          ))}
        </UnOrderedList>
        <ContactWrapper>
          {contact.map((item, index) => (
            <ContactContainer key={index}>
              <ContactText bold>{item.name}:</ContactText>
              <ContactText>{item.text}</ContactText>
            </ContactContainer>
          ))}
        </ContactWrapper>

        <SocialWrapper>
          {/* <p>Social networks:</p> */}
          <div>
            {social.map((item, index) => (
              <Link href={item.href} key={index}>
                <i className={item.icon}></i>
              </Link>
            ))}
          </div>
        </SocialWrapper>
        <Text>{copyright.text}</Text>
      </Padding>
      <LicenseWrapper>
        <LicenseText>{license.text}</LicenseText>
      </LicenseWrapper>
    </Wrapper>
  );
};

export default Footer;
