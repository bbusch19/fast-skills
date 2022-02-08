import { BasicButton } from './Button.styles'

function Button({ handleClick, children }) {
  return <BasicButton onClick={() => handleClick()}>{children}</BasicButton>
}

export default Button
