
export const Headquarter = [
    {
        name: "Access",
        icon: "favorite",
        badge: { value: "50+", color: "secondary" },
        children: [
            {
                name: "Admin",
                path: "/users/admin",
                iconText: "U"
            },
            {
                name: "Officers",
                path: "/users/officer",
                iconText: "C"
            },
            {
                name: "Works",
                path: "/users/worker",
                iconText: "B"
            },
        ]
    },
    {
        name: "Reports",
        icon: "trending_up",
        children: [
            {
                name: "Events",
                path: "/events",
                iconText: "1"
            },
            {
                name: "Gallery",
                path: "/Galerry",
                iconText: "2"
            },
            {
                name: "Issues",
                path: "/Issue",
                iconText: "3"
            },
        ]
    },
];
