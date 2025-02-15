import './Content.css'
import {projects} from "../data/projectData.ts";
import Card from "./Card.tsx";
import WorkExperience from "./WorkExperience.tsx";
import Link from "./Link.tsx";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

function Content() {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1, // Initial delay before starting children animation
                staggerChildren: 0.2 // Delay between each child's animation
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="space" variants={childVariants}></motion.div>
            <motion.h4 variants={childVariants}>Hi, I'm Srikar</motion.h4>
            <motion.p className="paragraph" variants={childVariants}>
                I am a full-stack developer specializing in Python, TypeScript, React, and Node.js. Currently, I'm working on a Splitwise clone. I love to cook, create new recipes, and write blogs about my life in Toronto.
            </motion.p>
            <motion.p className="paragraph" variants={childVariants}>
                I have a Master's degree in Computer Science from Concordia University, Montreal, and a Bachelor's of Technology degree in Computer Science and Engineering from Vellore Institute of Technology.
            </motion.p>

            <motion.div className="projects" variants={childVariants}>
                <div className="project-heading">
                    <motion.h4 variants={childVariants}>Latest Projects</motion.h4>
                    <motion.p className="link" variants={childVariants}><NavLink to={"/projects"}>See all projects</NavLink></motion.p>
                </div>
                {projects.slice(0, 2).map((project) => (
                    <motion.div key={project.id} variants={childVariants}>
                        <Card {...project} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div className="experience" variants={childVariants}>
                <WorkExperience />
            </motion.div>

            <motion.div className="connect" variants={childVariants}>
                <h4>Let's connect</h4>
                <p className="paragraph">
                    If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.
                </p>
                <ul className="socials">
                    <li><Link text="github" link="https://github.com/srikarvishnudatta/" /></li> /
                    <li><Link text="linkedin" link="https://www.linkedin.com/in/srikar-akella01/" /></li> /
                    <li><Link text="srikarakella28@gmail.com" link="mailto:srikarakella28@gmail.com" /></li>
                </ul>
            </motion.div>

            <motion.div className="button" variants={childVariants}>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Back to top
                </button>
            </motion.div>
        </motion.div>
    );
}

export default Content;
