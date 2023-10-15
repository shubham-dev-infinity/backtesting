import { Link } from 'react-router-dom';
import { Button } from '../button';
import './styles.scss'; // Import css modules stylesheet as styles
import { NavLink } from "react-router-dom";
import { useAppSelector } from '../../custome-hooks/redux';

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

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm"
                id="mainNav"
            >
                <div className="container px-4">
                    <Link to={"/"}>
                        <Button className='rounded-md text-white' >Logo</Button>
                    </Link>
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
                    <div className="navbar-collapse" id="navbarResponsive">
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
                        {!isLoggedIn && <>
                            <Link to='/login'><Button className='rounded-md mr-2 text-white'>Log In</Button></Link>
                            <Link to='/signup'><Button className='rounded-md text-white' >Sign Up</Button></Link>
                        </>}
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header