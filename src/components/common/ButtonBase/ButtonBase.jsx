import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBaseStyle } from "./buttonBase.style";

const ButtonBase = ({ children, onClick, className, toHref }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(toHref);
  };

  return (
    <ButtonBaseStyle
      className={className}
      onClick={toHref ? handleNavigate : onClick}
    >
      {children}
    </ButtonBaseStyle>
  );
};

export default ButtonBase;
