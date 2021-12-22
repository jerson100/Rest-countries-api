import styled from "styled-components";

const CountryStyle = styled.article`
  box-shadow: 0 0 4px 4px ${({ theme: { BORDER } }) => BORDER};
  background-color: 0 0 4px 4px ${({ theme: { BACKGROUND } }) => BACKGROUND};
  margin-bottom: 1.5rem;
`;

const CountryFlagStyle = styled.img`
  height: 200px;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;

const CountryHeaderStyle = styled.header`
  padding: 2.3rem 1.3rem;
  background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS};
`;

const CountryTitleStyle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
`;

const CountryListStyle = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1rem;
    span {
      :first-child {
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export {
  CountryStyle,
  CountryFlagStyle,
  CountryListStyle,
  CountryHeaderStyle,
  CountryTitleStyle,
};
