import styled from 'styled-components';

const ButtonCollapseWrapper = styled.div`
  margin: 0.7rem;

  @media (min-width: 960px) {
    display: none;
  }
`;

export default ButtonCollapseWrapper;
