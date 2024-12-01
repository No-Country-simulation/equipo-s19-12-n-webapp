import React from "react";
import "./style.css";
import classnames from "classnames";
import Icon from "../Icon/Icon";

const Button = ({ texto, variante, icon, iconSize, onClick}) => {
  const buttonClassnames = classnames("button", {
    orange: variante === "orange",
    green: variante === "green",
    white: variante === "white",
    conIcono: Icon,
  });

  return (
    <>
      <button className={buttonClassnames} onClick={onClick}>
        {icon && (
          <Icon
            type={icon}
            className="button-icon"
            size = {iconSize}
          />
        )}
        {texto}
      </button>
    </>
  );
};
export default Button;
