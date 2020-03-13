import React from 'react';
import './Button.scss';

export type ButtonType = 'primary' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'xm' | 'lg';
interface Props {
  text: string;
  size?: ButtonSize;
  type?: ButtonType;
  className?: string;
  onClick: Function;
}

const Button = (props: Props) => {
  const { text, size, type, onClick } = props;
  return (
    <button
      className={`button-basic
      button-basic-${type}
      button-basic-${size}
      `}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: '',
  size: 'xm',
  type: 'primary',
  onClick: () => {}
};

export default Button;
