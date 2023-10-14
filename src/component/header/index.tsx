import { Button } from '../button';
import './styles.scss'; // Import css modules stylesheet as styles

const Header = () => {
    const menulist = [{

    }]

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
                            <li className="nav-item">
                                home
                            </li>
                        </ul>
                        <Button children={'Log In'} className='me-2' />
                        <Button children={'Sign Up'} className='ms-2' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header