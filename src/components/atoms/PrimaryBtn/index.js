import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({
  as: Component = "button",
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const componentProps = Component === "button" ? { type } : {};

  return (
    <Component
      className={["primary-button", className].filter(Boolean).join(" ")}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default PrimaryBtn;
