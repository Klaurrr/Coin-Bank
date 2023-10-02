"use client";

import { useRouter } from "next/navigation";

import Logo from "@/shared/assets/generalIcons/Logo.svg";
import navIcons from "@/shared/assets/navIcons";
import { Button, DropDown } from "@/shared/ui";

import cls from "./Header.module.scss";

export const Header = () => {
      const { push } = useRouter();
      return (
            <header className={cls.header}>
                  <Logo onClick={() => push("/Home")} />
                  <div className={cls.nav}>
                        <DropDown title="Featurs">
                              <p>
                                    <img src={navIcons.funding.src} alt="" />
                                    Funding
                              </p>
                              <p>
                                    <img src={navIcons.staking.src} alt="" />
                                    Staking
                              </p>
                              <p>
                                    <img src={navIcons.liquidity.src} alt="" />
                                    Liquidity
                              </p>
                              <p>
                                    <img src={navIcons.trading.src} alt="" />
                                    Margin Trading
                              </p>
                        </DropDown>
                        <p className="font__small-regular">Prices</p>
                        <DropDown title="Company">
                              <p>
                                    <img src={navIcons.about.src} alt="" />
                                    About
                              </p>
                              <p>
                                    <img src={navIcons.blog.src} alt="" />
                                    Blog
                              </p>
                              <p>
                                    <img src={navIcons.faq.src} alt="" />
                                    FAQs
                              </p>
                              <p>
                                    <img src={navIcons.support.src} alt="" />
                                    Support
                              </p>
                        </DropDown>
                        <p className="font__small-regular">Developers</p>
                  </div>
                  <div className={cls.buttons}>
                        <Button variant={"secondary"} size={"large"} className={cls.sign__button}>
                              Sign In
                        </Button>
                        <Button variant={"secondary"} size={"large"}>
                              Get Started
                        </Button>
                  </div>
            </header>
      );
};
