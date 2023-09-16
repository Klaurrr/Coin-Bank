import { FC, ReactNode, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import generalIcons from "@/shared/assets/generalIcons";

import cls from "./DropDown.module.scss";

interface DropDownProps {
      children: ReactNode[];
      title: string;
}

export const DropDown: FC<DropDownProps> = (props) => {
      const { children, title } = props;

      const [isVisible, setIsVisible] = useState(false);

      const { push } = useRouter();

      const handleClick = () => {
            setIsVisible(false);
            push("/Support");
      };

      return (
            <div className={cls.dropdown}>
                  <p
                        className={clsx(cls.title, "font__small-regular")}
                        onClick={() => setIsVisible((prev) => !prev)}>
                        {title}
                        <img
                              src={generalIcons.chevronDown.src}
                              alt="chevron"
                              className={clsx(cls.image, !isVisible && cls.image__active)}
                        />
                  </p>
                  <div className={clsx(cls.container, isVisible && cls.active)}>
                        <p className={clsx(cls.subtitle, "font__small-medium")}>{title}</p>
                        <div className={cls.wrapper}>
                              {children &&
                                    children.map((node) => (
                                          <div onClick={handleClick} className={cls.child}>
                                                {node}
                                          </div>
                                    ))}
                        </div>
                  </div>
            </div>
      );
};
