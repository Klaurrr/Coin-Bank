import { FC, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

import cls from "./AppLink.module.scss";

interface AppLinkProps {
      to: string;
      className?: string;
      children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
      const { to, className, children, ...otherProps } = props;

      return (
            <Link href={to} className={clsx(cls.link, className)} {...otherProps}>
                  {children}
            </Link>
      );
};
