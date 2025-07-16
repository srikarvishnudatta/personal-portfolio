import {projects} from "../data/projectData.ts";
import Card from "./Card.tsx";
import {motion} from "framer-motion";

function Projects(){
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2 
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
    return <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={"content"}>
            <h2>Projects</h2>
        <div className={"projects"}>
            {projects.map((project) => {
                return <motion.div variants={childVariants}>
                    <Card
                        key={project.id}
                        {...project}/>
                </motion.div>
            })}
        </div>
    </motion.div>
}
export default Projects