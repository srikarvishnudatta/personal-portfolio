

export type CardData = {
    title: string,
    description:string,
    link:string
}

export default function Card(props: CardData) {
    function navigation(link:string){
        window.location.href = link
    }
    return <div className={"card"} onClick={() => navigation(props.link)}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
}