import './styles.scss'; // Import css modules stylesheet as styles

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
                id="mainNav"
            >
                <div className="container px-4">
                    <button className='logo_btn'>Logo</button>
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
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                home
                            </li>
                            <li className="nav-item">
                                home
                            </li>
                            <li className="nav-item">
                                home
                            </li>
                            <li className="nav-item">
                                home
                            </li>
                            <li className="nav-item">
                                home
                            </li>
                        </ul>
                        <button
                            className="btn rounded-pill login_btn px-3 me-lg-3 me-3"
                        // to={"/login"}
                        >
                            Login
                        </button>
                        <button className="btn  rounded-pill app_btn px-3 mb-lg-0">
                            Download app
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header