import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      className?: string;
      children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
      const { children, className, ...otherProps } = props;

      return (
            <button type="button" className={clsx(cls.button, className)} {...otherProps}>
                  {children}
            </button>
      );
};
