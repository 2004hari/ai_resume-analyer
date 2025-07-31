import {Link} from "react-router";
const Navbar = () => {
    return (
        <nav  className="navbar">
            <Link to="/">
                <p className="text-2zl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                UPLOAD RESUME
            </Link>


        </nav>
    )
}

export default  Navbar
