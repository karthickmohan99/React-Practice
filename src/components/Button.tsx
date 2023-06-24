import React from "react";

interface Props {
  children: string;
  onClicked: () => void;
  color?: "primary" | "secondary" | "dark" | "danger";
}

const Button = ({ children, onClicked, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClicked}>
      {children}
    </button>
  );
};

export default Button;
