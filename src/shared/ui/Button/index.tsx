import clsx from "clsx";
import cls from "./Button.module.scss";

import { ButtonHTMLAttributes, ReactNode, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      className?: string;
      children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
      const { children, className, ...otherProps } = props;

      return (
            <button type="button" className={clsx(cls.button, className)} {...otherProps}>
                  {children}
            </button>
      );
};
