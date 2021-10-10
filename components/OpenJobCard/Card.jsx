import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0rem 0 2.4rem 0rem;
  border-bottom: solid #bdbdbd 1px;
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
      <JobContainer>
        <Role>{role}</Role>
        <Location>{location}</Location>
      </JobContainer>
    </Wrapper>
  );
};

export default Card;
