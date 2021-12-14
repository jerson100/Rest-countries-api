import styled from "styled-components";

const SearchFormStyle = styled.form`
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0rem 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  .icon {
    width: 32px;
    height: 32px;
    margin-right: 1.5rem;
    enable-background: new 0 0 632.399 632.399;
  }
`;

const SearchInputStyle = styled.input`
  border: none;
  height: 100%;
  padding: 1rem 1.5rem;
  flex: 1 0 0;
`;

export { SearchFormStyle, SearchInputStyle };
