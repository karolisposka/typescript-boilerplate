import React from 'react';
import * as S from './Button.styles';

type button = {
    text: string,
    handleClick: () => void,
}

const Button = ({text, handleClick} :button) => {
  return (
    <S.Button onClick={handleClick}>{text}</S.Button>
  )
}

export default Button