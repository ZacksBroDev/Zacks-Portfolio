import React from "react";

const SecondaryBtn = ({
  as: Component = "button",
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const componentProps = Component === "button" ? { type } : {};

  return (
    <Component
      className={[
        "btn text-white flex items-center gap-2 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent duration-500 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SecondaryBtn;
