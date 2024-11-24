// Button.tsx
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // To handle different button styles
  size?: "small" | "medium" | "large"; // To handle button sizes
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // For form buttons
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
