import { authRoles } from "./../../auth/authRoles"; 

export const Reports = [
  {
    name: "Reports",
    path: "/offices/reports",
    auth: authRoles.editor,
    iconText: "U"
  },
  {
    name: "Issues",
    path: "/offices/issues",
    auth: authRoles.admin,
    iconText: "B"
  },

];
