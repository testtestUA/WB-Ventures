import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.section`
  padding: 0rem 0 2.4rem 0rem;
  border-bottom: solid #bdbdbd 1px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`;
const JobContainer = styled.div``;
const Role = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;
const Location = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #828282;
`;

const Card = ({ role, location }) => {
  return (
    <Wrapper>
      <Link
        href={`mailto: info@wbventuresnv.com?subject=${role}`}
        target='_blank'
      >
        <JobContainer>
          <Role>{role}</Role>
          <Location>{location}</Location>
        </JobContainer>
      </Link>
    </Wrapper>
  );
};

export default Card;
