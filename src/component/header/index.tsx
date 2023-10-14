import { Button } from '../button';
import './styles.scss'; // Import css modules stylesheet as styles
import { NavLink } from "react-router-dom";

const Header = () => {
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
            menu_link: "/contactus",
            title: "Contact Us"
        },
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
                id="mainNav"
            >
                <div className="container px-4">
                    <Button children={'Logo'} className='' />
                    {/* <Link className="navbar-brand" to={"/"}>
                    </Link> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-solid fa-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            {menuList?.map((item) => {
                                return (
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link me-lg-2"
                                            to={item?.menu_link}
                                        >
                                            {item?.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                        <Button children={'Log In'} className='me-2' />
                        <Button children={'Sign Up'} className='ms-2' />
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header