import { Link, useLocation } from "react-router-dom";
import { Button } from "../button";
import "./styles.scss"; // Import css modules stylesheet as styles
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../custome-hooks/redux";
import { useEffect, useState } from "react";
import cn from "classnames";

const Header = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const [activeNav, setActiveNav] = useState('')
  console.log(isLoggedIn);
  const location = useLocation();
  const fragment = location.hash;

  const menuList = [
    {
      id: "backtesting",
      menu_link: "/",
      title: "About Backtesting",
    },
    {
      id: "Features",
      menu_link: "/features",
      title: "Features",
    },
    {
      id: "subscription",
      menu_link: "/plan",
      title: "Subscription Plan",
    },
    {
      id: "contactus",
      menu_link: "/contact-us",
      title: "Contact Us",
    },
  ];

  const id = fragment.substring(1); // This will remove the '#' symbol

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  useEffect(() => {
    const button: HTMLElement | null = document.querySelector("#menu-button");
    const menu: HTMLElement | null = document.querySelector("#menu");
    const header: HTMLElement | null = document.querySelector("#header");

    if (button && menu && header) {
      button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        header.classList.toggle("menu_Height");
      });
    }
    return () => {
      setActiveNav('')
    }
  }, []);

  const handleClickOnNavoption = (targetID: string) => {
    const targetElement = document.querySelector(`#${targetID}`) as HTMLElement;
    const offset = 75; // Adjust the offset value as needed
    const targetPosition = targetElement.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    setActiveNav(targetID)
  }



  return (
    <>
      <header className="header_bg p-7 items-center" id="header">
        <div className="container mx-auto sm">
          <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          md:py-0
          text-lg text-gray-700
          bg-#15083a"
          >
            <div>
              <Link to="/">
                <Button className="rounded-xl text-white">Logo</Button>
              </Link>
            </div>

            <button
              className="h-6 w-6 cursor-pointer lg:hidden block"
              id="menu-button"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div
              className="hidden w-full lg:flex lg:items-center lg:w-auto items-center"
              id="menu"
            >
              <ul
                className="
              pt-4
              text-base text-gray-700
            lg:flex
              lg:justify-between 
              lg:pt-0 text-center"
              >
                {menuList?.map((item, i) => {
                  return (
                    <li className="py-2 px-4 md:py-3" key={i}>
                      <span
                        className={cn("inline_Block py-0  no-underline lg:me-2 text-sm text-white", activeNav === item.id && 'nav_Active')}
                        onClick={() => handleClickOnNavoption(item.id)}
                      >
                        {item?.title}
                      </span>
                    </li>
                  );
                })}
                {!isLoggedIn && <div
                  className="h-12 bg-white hidden md:inline"
                  style={{ width: "1px" }}
                ></div>}
                {!isLoggedIn && (
                  <div className="flex flex-col justify-center md:flex-row">
                    <Link to="/">
                      <Button className="rounded-xl ml-3 mr-4 text-white mb-4 md:mb-0 text-xs">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button className="rounded-xl text-white">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
