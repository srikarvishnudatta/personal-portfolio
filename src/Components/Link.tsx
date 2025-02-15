type LinkData = {
    text:string
    link:string;
    className?:string;
}

function Link({text, link, ...rest}:LinkData){
    return <a href={link} {...rest}>
        {text}
    </a>
}
export default Link