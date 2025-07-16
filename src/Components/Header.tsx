import './Header.css'
import {NavLink} from "react-router-dom";
function Header(){
    return <header className={"header"}>
        <nav className={"content"}>
            <ul className={"navigation"}>
                <li ><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/projects"}>Projects</NavLink></li>
                <li><NavLink to={"/blog"}>Blogs</NavLink></li>
            </ul>
        </nav>
    </header>
}
export default Header