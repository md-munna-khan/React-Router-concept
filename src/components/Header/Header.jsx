
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>hello from header</h1>
           <nav>
           <Link to='/'>Home</Link>
           {/* <Link to='/users'>Users</Link> */}
           <NavLink to='/users'>user</NavLink>
           <NavLink to="/posts">posts</NavLink>
           {/* <Link to="/posts">posts</Link> */}
           <Link to='/about'>About</Link>
           <Link to='/Contact'>Contact</Link>
         
           </nav>
        </div>
    );
};

export default Header;