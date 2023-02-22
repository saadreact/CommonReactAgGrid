import React from 'react';

interface ButtonProps {
   onClick?: () => void;
   children?: React.ReactNode;
}

const Button:React.FC<ButtonProps> = (props) => {
  const {children} = props;

  return (
    <button 
    {...props}
  >
  {children}
  </button>
  )
}

export default Button