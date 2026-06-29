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
        "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[rgba(255,106,26,0.32)] bg-[rgba(255,255,255,0.02)] px-4 py-3 font-['JetBrains_Mono'] text-[0.82rem] font-semibold tracking-[0.02em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,106,26,0.56)] hover:bg-[rgba(255,255,255,0.05)] disabled:cursor-not-allowed disabled:opacity-60",
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
