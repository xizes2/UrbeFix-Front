import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button";
  buttonClassName: string;
  children?: string | JSX.Element;
}

const Button = ({
  buttonClassName,
  type,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={buttonClassName} type={type} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
