import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import { Badge } from "@mui/material";
import { Context } from "../../../context/Context";

const Button = ({ texto, variante, icon, iconSize, onClick, ancho}) => {
  const buttonClassnames = classnames("button", {
    orange: variante === "orange",
    green: variante === "green",
    white: variante === "white",
    black: variante === "black",
    noneBackground: variante === "noneBackground",
    conIcono: Icon,
  });

  const { carrito } = useContext(Context);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setCantidad(carrito.length);
  }, [carrito]);

  return (
    <>
      <button className={buttonClassnames} style={{ width: ancho }} onClick={onClick}>
        {icon && (

          <Badge badgeContent={cantidad} color="primary">
            <Icon
              type={icon}
              className="button-icon"
              size={iconSize}
            />
          </Badge>
        )}
        {texto}
      </button>
    </>
  );
};
export default Button;
