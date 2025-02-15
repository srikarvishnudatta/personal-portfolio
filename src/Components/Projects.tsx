import {projects} from "../data/projectData.ts";
import Card from "./Card.tsx";


function Projects(){
    return <div className={"content"}>
            <h4>Projects</h4>
        <div className={"projects"}>
            {projects.map((project) => {
                return <Card
                    key={project.id}
                    {...project}/>
            })}
        </div>
    </div>
}
export default Projects