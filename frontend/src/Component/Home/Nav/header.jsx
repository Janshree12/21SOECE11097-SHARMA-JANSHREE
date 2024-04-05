import {Link} from 'react-router-dom';
import './nav.css';
const Nav=()=>{
    return(
        <div className="nav-ul">
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><button><Link to="/signin">Sign in</Link></button></li>
                <li><button><Link to="/register">Register</Link></button></li>
            </ul>
        </div>
    )
}
export default Nav;