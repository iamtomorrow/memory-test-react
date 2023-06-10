
import "./Header.css";
import Logo from '../../images/logo.png';

const Header = ( ) => {
    return (
        <div className="header--container">
             <div className="logo--container">
                <img id="logo" src={ Logo } alt="" />
             </div>
        </div>
    );
}

export default Header;