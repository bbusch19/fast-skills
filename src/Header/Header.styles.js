import styled from 'styled-components'

export const BasicHeader = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bfc0c1;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin: 0;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`
