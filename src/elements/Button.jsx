import React from 'react'
import styled, {css} from 'styled-components'

const Button = ({disabled, children}) => {
  return (
    <StyledButton disabled={disabled}>{children}</StyledButton>
  )
}


const StyledButton = styled.button`
  margin:0;
  border:none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #eee);
  color: var(--button-color, #000);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2)
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #ccc);
  }
`

export default Button;