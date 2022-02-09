import { BasicButton } from './Button.styles'

function Button({ handleClick, children, noMargin }) {
  return (
    <BasicButton noMargin={noMargin} onClick={() => handleClick()}>
      {children}
    </BasicButton>
  )
}

export default Button
