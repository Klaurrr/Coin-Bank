import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      className?: string;
      children?: ReactNode;
      variant: "primary" | "secondary";
      size: "small" | "large";
}

export const Button: FC<ButtonProps> = (props) => {
      const { children, className, variant, size, ...otherProps } = props;

      const getClassName = () => {
            const baseClass = cls.button;
            const variantClass =
                  variant === "primary" ? cls.button__primary : cls.button__secondary;
            const sizeClass = size === "large" ? cls.button__large : cls.button__small;
            const fontClass = "font__" + (size === "large" ? "medium" : "small") + "-medium";

            return clsx(baseClass, className, variantClass, sizeClass, fontClass);
      };

      return (
            <button type="button" className={getClassName()} {...otherProps}>
                  {children}
            </button>
      );
};
