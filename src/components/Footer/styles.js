
import styled from 'styled-components';


export const Text = styled.p`
  text-decoration: none;
  font-family: 'Roboto';
  text-align: left;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #c8d6f0;
    transition: color 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;


export const FooterContainer = styled.footer`
  background-color: #2c2d31;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const LeftSection = styled(Section)`
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const CenterSection = styled(Section)`
  align-items: center;
  text-align: center;
`;

export const RightSection = styled(Section)`
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const CompanyName = styled.h2`
  font-family: 'Roboto';
  font-size: 24px;
  border-bottom: 1px solid #444;
  margin-bottom: 10px;
`;

export const SmallText = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 12.5px;
  }
`;

export const ProjectsTitle = styled.h3`
  font-size: 20px;
  font-family: 'Roboto';
  border-bottom: 1px solid #444;
  margin-bottom: 10px;
`;

export const ProjectsList = styled.ul`
  list-style-type: none;
  font-family: 'Roboto';
  padding: 0;
  margin-left: 1.5em;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  li {
    font-size: 14px;
    margin-bottom: 5px;
  }

`;

export const ContactTitle = styled.h3`
  font-size: 20px;
  font-family: 'Roboto';
  border-bottom: 1px solid #444;
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  font-family: 'Roboto';
  padding: 0;

  li {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #444;
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #888;
`;
