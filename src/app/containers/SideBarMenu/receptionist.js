
export const Receptionist = [
  {
    name: "POS",
    icon: "favorite",
    badge: { value: "40+", color: "secondary" },
    children: [
      {
        name: "cashier",
        path: "/users/cashier",
        iconText: "c"
      },
      {
        name: "Sales",
        path: "/users/sales",
        iconText: "s"
      },
      {
        name: "services",
        path: "/users/services",
        iconText: "o"
      },
    ]
  },
  {
    name: "Scheduler",
    path: "/schedules",
    iconText: "1"
  },
  {
    name: "Booking",
    path: "/cashier/booking",
    iconText: "2"
  },
  {
    name: "Events",
    path: "/events",
    iconText: "3"
  },
  {
    name: "Newsfeed",
    path: "/newsfeed",
    iconText: "4"
  },
];
