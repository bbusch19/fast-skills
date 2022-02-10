import styled from 'styled-components'

export const Input = styled.input`
  font-size: 12px;
  border: 1px solid #bfc0c1;
  padding: 6px;
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    outline: none;
  }
`

export const InputGroup = styled.div`
  display: flex;

  /* Fixes sizing weirdness for safari */
  input {
    width: 100%;
    height: 100%;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 12px;
  justify-content: center;
`
