import React from 'react'
import styled, { css } from 'styled-components'

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 20px 50px;
    --button-radius: 12px;
  `,
}

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
};

const BTNBG = {
  no: css`
    --button-bg-color: none;
  `
}


const Button = ({ isDisabled, size, variants, btnBg, children, onClickHandler }) => {
  const sizeStyle = SIZES[size]
  const variantStyle = VARIANTS[variants]
  const btnBgdStyle = BTNBG[btnBg]


  return (
    <StyledButton
      disabled={isDisabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      btnBgdStyle={btnBgdStyle}
      onClick={onClickHandler}
    >
      {children}
    </StyledButton>
  )
}


const StyledButton = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}
  ${(props) => props.btnBgdStyle}

  margin:0 5px;
  border:none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 18px);
  background: var(--button-bg-color, #EF4C1E);
  color: var(--button-color, #fff);

  /* &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #B43917)
  } */

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #ccc);
  }
`

export default Button;