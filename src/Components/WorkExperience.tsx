import './Content.css'
import data from "../data/summary.json";
function WorkExperience(){
    return <section>
        <div className={"experience-heading"}>
            <h2>Experience</h2>
            <p className={"link"}>See all work</p>
        </div>
        {data.work.map((work, index) => <div key={index}>
            <div className={"work"}>
            <div className={"timeline"}>
                <div>
                    <h4>{work.company}</h4>
                    <div className={"role"}>{work.title}</div>
                </div>
                <div className={"role"}>
                    {work.dates}
                </div>
            </div>
            <p className={"paragraph"}>
                {work.summary}
            </p>
        </div>
        </div>)}
    </section>
}

export default WorkExperience;