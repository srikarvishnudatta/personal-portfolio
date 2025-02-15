import './Header.css'
import {NavLink} from "react-router-dom";
function Header(){
    return <div className={"header"}>
        <div className={"header-content content"}>
            <h4>Srikar Akella</h4>
            <ul className={"navigation"}>
                <li><NavLink to={"/"}>home</NavLink></li> /
                <li><NavLink to={"/projects"}>projects</NavLink></li>
            </ul>
        </div>
    </div>
}
export default Header