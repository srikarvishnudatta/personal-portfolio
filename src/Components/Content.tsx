import './Content.css'
import {projects} from "../data/projectData.ts";
import Card from "./Card.tsx";
import WorkExperience from "./WorkExperience.tsx";
import Link from "./Link.tsx";
function Content(){
    return <div className={"content"}>
        <div className={"space"}></div>
        <h4 className={"animate-1"}>Hi, I'm Srikar</h4>
        <p className={"paragraph animate-2"}>
            I am full stack developer specialising in Python, Typescript, React and Nodejs. Currently I'm working on a Splitwise clone. I love to cook, create new recipes and write blogs of my life in Toronto.
        </p>
        <p className={"paragraph"}>
            I have a Master's degree in Computer Science from Concordia University, Montreal and a Bachelor's of Technology degree in Computer Science and Engineering from Vellore Insitute of Technology.
        </p>

        <div className={"projects"}>
            <div className={"project-heading"}>
                <h4>Latest Projects</h4>
                <p className={"link"}>See all projects</p>
            </div>
            {projects.map((project) => {
                if (project.id > 2) return
                return <Card
                    key={project.id}
                    {...project}/>
            })}
        </div>

        <div className={"experience"}>
            <WorkExperience />
        </div>
        <div className={"connect"}>
            <h4>Let's connect</h4>
            <p className={"paragraph"}>If you want to get in touch with me about something or just to say hi, reach out
                on social media or send me an email</p>
            <ul className={"socials"}>
                <li><Link text={"github"} link={"https://github.com/srikarvishnudatta/"} /></li>
                /
                <li><Link text={"linkedin"} link={"https://www.linkedin.com/in/srikar-akella01/"} /></li> /
                <li><Link text={"srikarakella28@gmail.com"} link={"mailto:srikarakella28@gmail.com"} /></li>
            </ul>
        </div>
        <div className={"button"}>
            <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                Back to top
            </button>
        </div>
    </div>
}

export default Content