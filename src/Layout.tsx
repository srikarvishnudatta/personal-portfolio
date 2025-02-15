import Header from "./Components/Header.tsx";
import {Outlet} from "react-router-dom";

function Layout(){
    return <>
        <Header />
        <Outlet />
    </>
}
export default Layout