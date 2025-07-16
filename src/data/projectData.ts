export type Data = {
    id: number,
    title: string,
    description:string,
    link:string
}

export const projects: Data[] = [
    {
        id: 1,
        title:"Tally Application",
        description: "An app to track personal expenses and group expenses",
        link:"https://github.com/srikarvishnudatta/tally-frontend"
    },
      {
        id:4,
        title:"Price tracker Pro",
        description: "A SaaS application to track your spendings and market prices",
        link:"https://github.com/srikarvishnudatta/price-tracker-pro"
    },
    {
        id:5,
        title:"Cookbase",
        description:"An AI based Cookbook to store your recipes and explore new ideas",
        link:"https://github.com/srikarvishnudatta/cookbase"
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
        link:"https://github.com/srikarvishnudatta/personal-portfolio"
    }
];