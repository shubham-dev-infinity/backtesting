import { Link } from "react-router-dom";
import { Button } from "../button";
import "./styles.scss"; // Import css modules stylesheet as styles
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../custome-hooks/redux";
import { useEffect } from "react";

const Header = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  console.log(isLoggedIn);
  const menuList = [
    {
      menu_link: "/",
      title: "About Backtesting",
    },
    {
      menu_link: "/features",
      title: "Features",
    },
    {
      menu_link: "/plan",
      title: "Subscription Plan",
    },
    {
      menu_link: "/contact-us",
      title: "Contact Us",
    },
  ];
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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sc = window.scrollY; // Replace scrollTop with scrollY in TypeScript
      if (sc > 100) {
        document.querySelector("#header")?.classList.add("sticky");
      } else {
        document.querySelector("#header")?.classList.remove("sticky");
      }
    });
  }, []);

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
                {menuList?.map((item) => {
                  return (
                    <li className="py-2 px-4 md:py-3">
                      <NavLink
                        className="inline_Block py-0  no-underline lg:me-2 text-sm"
                        to={item?.menu_link}
                      >
                        {item?.title}
                      </NavLink>
                    </li>
                  );
                })}
                <div
                  className="h-12 bg-white hidden md:inline"
                  style={{ width: "1px" }}
                ></div>
                {!isLoggedIn && (
                  <div className="flex flex-col justify-center md:flex-row">
                    <Link to="/login">
                      <Button className="rounded-xl ml-3 mr-4 text-white mb-4 md:mb-0 text-xs">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup">
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
