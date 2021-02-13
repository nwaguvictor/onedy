import './navbar.scss';
import onedyLogo from '../../assets/svgs/onedy-logo.svg'
import { Button } from '../Common/Button';

function Navbar() {
    return (
        <nav className="navigation">
            <div className="toggler">
                <div className="toggler__menu"></div>
            </div>

            <div className="logo">
                <img src={onedyLogo} alt="logo icon" className="logo__icon" />
                <h3 className="logo__text">Onedy</h3>
            </div>
            <div className="navbar">
                <a href="/" className="navbar__item">Home</a>
                <a href="/" className="navbar__item">Class</a>
                <a href="/" className="navbar__item">About</a>
                <a href="/" className="navbar__item">Pricing</a>
                <a href="/" className="navbar__item">Blog</a>
            </div>
            <div className="user-account">
                <a href="/" className="navbar__item">Login</a>
                <Button outline className="px-4 py-2">Register</Button>
            </div>
        </nav>
    )
}

export default Navbar