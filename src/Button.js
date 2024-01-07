import React from "react";

const Button = (
  childern,
  onClick
) => {
  return (
    <button className="btn" onClick={onClick}>
      {childern}
    </button>
  );
}

export default Button;