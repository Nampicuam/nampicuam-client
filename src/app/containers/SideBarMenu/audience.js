// import { authRoles } from "./../../auth/authRoles";

export const Audience = [

  {
    name: "Stream", // newsfeed | Events
    path: "/audiences/stream",
    icon: "news",
  },
  {
    name: "Activities",
    icon: "favorite",
    children: [
      {
        name: "Volunteers",
        path: "/audiences/volunteer",
        iconText: "V"
      },
      {
        name: "Donations",
        path: "/audiences/donation",
        iconText: "D"
      },
      {
        name: "Sponsor",
        path: "/audiences/sponsors",
        iconText: "S"
      }
    ]
  },
  {
    name: "e-Commerce",
    icon: "ecommerce",
    children: [
      {
        name: "Products",
        path: "/ecommerce/products",
        icon: "items",
      },
      {
        name: "Cart",
        path: "/ecommerce/cart",
        icon: "shopping_cart"
      }]
    },
  {
    name: "Event Booking",
    path: "/audiences/booking",
    icon: "books",
  },
];
