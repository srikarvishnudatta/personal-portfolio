import './Content.css'
function WorkExperience(){
    return <>
        <div className={"experience-heading"}>
            <h4>Work Experience</h4>
            <p className={"link"}>See all work</p>
        </div>
        <div className={"work"}>
            <div className={"timeline"}>
                <div>
                    <h4>Freelancer</h4>
                    <div className={"role"}>Self Employed</div>
                </div>
                <div className={"role"}>
                    Sept 2024-Present
                </div>
            </div>
            <p className={"paragraph"}>
                Developing a React-based cafe website with a customer order system and an admin dashboard for
                management.
                Integrated Stripe for payments and utilized Express with Supabase for storing order and payment
                data.
                Exploring real-time communication options such as sockets or gRPC for enhanced functionality.
            </p>
        </div>
        <div className={"work"}>
            <div className={"timeline"}>
                <div>
                    <h4>Foxmula Pvt Ltd</h4>
                    <div className={"role"}>Backend Developer Intern</div>
                </div>
                <div className={"role"}>
                    Mar 2022-Aug 2022
                </div>
            </div>
            <p className={"paragraph"}>
                Engineered a pet store web app using Express.js and MongoDB, managing 500+ products and 1000+ daily
                interactions with features like product management and user engagement.
                Containerized the app with Docker for consistent deployment, reducing deployment time by 20%.
                Configured CI/CD pipelines with GitHub Actions, automating deployments and increasing deployment
                frequency by 30%.
            </p>
        </div>
        <div className={"work"}>
            <div className={"timeline"}>
                <div>
                    <h4>CodeSpeedy</h4>
                    <div className={"role"}>Frontend Developer Intern</div>
                </div>
                <div className={"role"}>
                    Sept 2021-Feb 2022
                </div>
            </div>
            <p className={"paragraph"}>
                Designed and developed a scalable food delivery app front-end using React and CSS, featuring
                personalized elements like order history, favorite foods, and saved addresses, boosting user
                satisfaction by 25%.
                Optimized the interface for 5+ screen sizes and collaborated with designers to implement pixel-perfect
                Figma designs, enhancing visual consistency and engagement.
                Leveraged React Query for efficient data fetching and caching, reducing load times by 15%,
                and utilized Redux for managing global state, improving data consistency and performance by 20%.
            </p>
        </div>
    </>
}

export default WorkExperience;