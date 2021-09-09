// import { authRoles } from "./../../auth/authRoles";

export const Audits = [
  {
    name: "Utilities Expenses",
    icon: "favorite",
    badge: { value: "40+", color: "secondary" },
    children: [
      {
        name: "bills",
        path: "/users/admin",
        iconText: "ad"
      },
      {
        name: "Payroll",
        path: "/users/custodian",
        iconText: "cs"
      },
      {
        name: "Vouchers",
        path: "/users/officer",
        iconText: "o"
      },
    ]
  },
  {
    name: "Booking",
    path: "/procedures",
    iconText: "1"
  },
  {
    name: "Events",
    path: "/forms",
    iconText: "2"
  },
];
