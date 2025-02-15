import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.tsx";
import Content from "./Components/Content.tsx";
import Projects from "./Components/Projects.tsx";

function App(){

    return <Routes>
        <Route path={"/"} element={<Layout />}>
            <Route index element={<Content />}/>
            <Route  path={"/projects"} element={<Projects />}/>
        </Route>
    </Routes>
}
export default App