import './Content.css'
import WorkExperience from "./WorkExperience.tsx";
import Link from "./Link.tsx";
import {motion} from "framer-motion";
import data from "../data/summary.json";
import IconArrowUpRight from './Icon.tsx';

function Content() {
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

    return (
        <motion.div
            className="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="space" variants={childVariants}></motion.div>
            <motion.h2 variants={childVariants}>Hi, I'm Srikar 👋</motion.h2>
            {data.summary.map((para, index) => <motion.p key={index} className="paragraph" variants={childVariants}>
                {para}
            </motion.p>)}


            <motion.div className="experience" variants={childVariants}>
                <WorkExperience />
            </motion.div>

            <motion.div className="connect" variants={childVariants}>
                <h4>Let's connect</h4>
                <p className="paragraph">
                    If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.
                </p>
                <ul className="socials">
                    <li>    
                        <IconArrowUpRight />
                        <Link text="github" link="https://github.com/srikarvishnudatta/" /></li> /
                    <li>
                        <IconArrowUpRight />
                        <Link text="linkedin" link="https://www.linkedin.com/in/srikar-akella01/" /></li> /
                    <li>
                        <IconArrowUpRight />
                        <Link text="srikarakella28@gmail.com" link="mailto:srikarakella28@gmail.com" /></li>
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
