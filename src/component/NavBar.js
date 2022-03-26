import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {

    return (
        <>
            <div className="topnav">
                {/* <a className="active" href="/">Home</a>
                <a href="/about">About</a> */}
                <a onClick={(e) => e.preventDefault()} href="/todo">Todo App</a>

            </div>


        </>
    )
}

export default NavBar;