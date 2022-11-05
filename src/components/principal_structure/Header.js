import '../../assets/stylesheets/principal_structure/Header.css';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="header-cont">
           <Link to='/'> <div className='logo'>Logo-wip</div></Link>
            <div className='logo-menu'><FiMenu/></div>

        </div>
    )
}

export default Header;