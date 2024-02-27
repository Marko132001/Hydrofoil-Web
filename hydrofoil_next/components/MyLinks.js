export const links = [
    {
        name: "navbar:news",
        submenu: true,
        sublinks: [
            {
                Head: "navbar:news",
                sublink: [
                    {name: "navbar:blog", link: "/posts"},
                    {name: "navbar:media", link: "/media"},
                    {name: "navbar:articles", link: "/professional-articles"},
                ]
            }
        ]
    },
    {
        name: "navbar:projects",
        submenu: true,
        sublinks: [
            {
                Head: "Solar Class",
                sublink: [
                    {name: "Teredo Navalis", link: "/teredo-navalis"},
                    {name: "Delta One", link: "/delta-one"},
                ]
            },
            {
                Head: "Energy Class",
                sublink: [
                    {name: "Malo Vitra", link: "/malo-vitra"},
                ]
            },
            {
                Head: "navbar:other",
                sublink: [
                    {name: "RiHack-2023", link: "/rihack"},
                    {name: "HydroContest", link: "/hydro-contest"},
                ]
            }
        ]
    }
]