import styled from 'styled-components'

export const BasicButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3e64ff;
  cursor: pointer;
  background-color: #3e64ff;
  border-radius: ${(props) => (props.noMargin ? 0 : '3px')};
  margin: ${(props) => (props.noMargin ? 0 : '1em')};
`
