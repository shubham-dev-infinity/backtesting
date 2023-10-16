import { Link } from 'react-router-dom';
import { Button } from '../button';
import './styles.scss'; // Import css modules stylesheet as styles
import { NavLink } from "react-router-dom";
import { useAppSelector } from '../../custome-hooks/redux';
import { useEffect } from 'react';

const Header = () => {
    const { isLoggedIn } = useAppSelector((state) => state.user)
    console.log(isLoggedIn)
    const menuList = [
        {
            menu_link: "/",
            title: "About Backtesting"
        },
        {
            menu_link: "/features",
            title: "Features"
        },
        {
            menu_link: "/plan",
            title: "Subscription Plan"
        },
        {
            menu_link: "/contact-us",
            title: "Contact Us"
        },
    ]
    useEffect(() => {
        const button: HTMLElement | null = document.querySelector('#menu-button');
        const menu: HTMLElement | null = document.querySelector('#menu');
        const header: HTMLElement | null = document.querySelector('#header');
        
        if (button && menu &&header) {
          button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            header.classList.toggle('menu_Height');
          });
        }
      }, []);
      
      useEffect(() => {
        window.addEventListener('scroll', ()=>{
          const sc = window.scrollY; // Replace scrollTop with scrollY in TypeScript
          if (sc > 100) {
            document.querySelector('#header')?.classList.add('sticky');
          } else {
            document.querySelector('#header')?.classList.remove('sticky');
          }
        });
      
      }, []);
    
      const handleScroll = () => {
       
      };
    return (
        <>
          {/* <nav className="bg-orange-600 relative flex flex-wrap items-center justify-between py-3 px-4 text-black sticky top-0 shadow-sm"
        //    id="mainNav"
           >
    <div className="container mx-auto sm:px-4 px-4" style={{backgroundColor:"black"}}>
        <Link to={"/"}>
            <button s="rounded-xl text-white">Logo</button>
        </Link>
        <button
            className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fa-solid fa-list"></i>
        </button>
        <div className="flex-grow items-center" id="navbarResponsive">
            <ul className="flex flex-wrap list-none pl-0 mb-0 ms-auto me-4 my-3 lg:my-0">
                {menuList?.map((item) => {
                    return (
                        <li>
                            <NavLink
                                className="inline-block py-2 px-4 no-underline lg:me-2"
                                to={item?.menu_link}
                            >
                                {item?.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            {!isLoggedIn && (
                <>
                    <Link to="/login">
                        <button className="rounded-xl mr-2 text-white">Log In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="rounded-xl text-white">Sign Up</button>
                    </Link>
                </>
            )}
        </div>
    </div>
</nav> */}

{/* <header>
  <nav className="h-color  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className='container mx-auto sm:px-4 px-4'>
    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
    <Link to={"/"}>
            <button className="rounded-xl text-white">Logo</button>
        </Link>
      <input type="checkbox" id="check" />

      <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
      {menuList?.map((item) => {
                    return (
                        <li>
                            <NavLink
                                className="inline-block py-2 px-4 no-underline lg:me-2"
                                to={item?.menu_link}
                            >
                                {item?.title}
                            </NavLink>
                        </li>
                    );
                })}

        <label htmlFor="check" className="close-menu">X</label>
      </span>

      <label htmlFor="check" className="open-menu">Menu</label> 
    </ul>
    </div>
  </nav>
</header> */}
{/* <header>
  <nav className="h-color fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className='container mx-auto sm:px-4 px-4'>
      <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
        <Link to={"/"}>
          <button className="rounded-xl text-white">Logo</button>
        </Link>
        <input type="checkbox" id="check" />

        <div className="menu-container">
          <span className="menu flex">
            {menuList?.map((item) => {
              return (
                <li key={item?.menu_link}>
                  <NavLink
                    className="inline-block py-2 px-4 no-underline lg:me-2"
                    to={item?.menu_link}
                  >
                    {item?.title}
                  </NavLink>
                </li>
              );
            })}
          </span>
          <label htmlFor="check" className="close-menu">X</label>
        </div>

        <label htmlFor="check" className="open-menu">Menu</label>
      </ul>
    </div>
  </nav>
</header> */}

<header className='header_bg p-7 items-center' id='header'>
    <div className='container mx-auto sm'>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          md:py-0
          text-lg text-gray-700
          bg-#15083a
          
        "
      >
       <div >
       <Link to={"/"}>
            <Button className="rounded-xl text-white" children={'Logo'} />
        </Link>
      {/* <input type="checkbox" id="check" /> */}
        </div>
       
        <button
            className="h-6 w-6 cursor-pointer xl:hidden block"
            id="menu-button"
        >
            <i className="fa-solid fa-bars"></i>
        </button>
       
       <div className="hidden w-full xl:flex xl:items-center xl:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              xl:flex
              xl:justify-between 
              xl:pt-0"
          >
            {menuList?.map((item) => {
                    return (
                        <li className='py-3 px-4'>
                            <NavLink
                                className="inline_Block py-0  no-underline lg:me-2"
                                to={item?.menu_link}
                            >
                                {item?.title}
                            </NavLink>
                        </li>
                    );
                })}
            {!isLoggedIn && <>
                                <Link to='/login'><Button className='rounded-xl ml-3 mr-4 text-white'>Log In</Button></Link>
                                <Link to='/signup'><Button className='rounded-xl text-white'>Sign Up</Button></Link>
                            </>}
          </ul>
        </div>
    </nav>

    </div>
  </header>
        </>
    )
}

export default Header