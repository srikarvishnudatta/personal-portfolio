export type Data = {
    id: number,
    title: string,
    description:string,
    link:string
}

export const projects: Data[] = [
    {
        id: 1,
        title:"SplitsApp",
        description: "An app to split expenses",
        link:"https://github.com/srikarvishnudatta/SplitsApp"
    },
    {
        id: 2,
        title:"Emor",
        description: "Detects your emotion using a Custom build AI model",
        link:"https://github.com/srikarvishnudatta/Emor-frontend"
    },
    {
        id: 3,
        title:"Personal portfolio",
        description: "Personal portfolio built in react, css",
        link:""
    },
    {
        id: 4,
        title:"Demo cafe site",
        description: "A cafe website prototype build using React, Stripe, CSS, Python",
        link:""
    },
    {
        id: 5,
        title:"Blog Page and cookbook",
        description: "My very own blog page and cookbook with custom editor",
        link:"https://github.com/srikarvishnudatta/frontend"
    },
];