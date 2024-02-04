import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Communities",
  //   path: "/about",
  //   newTab: false,
  // },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Employment",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Housing",
        path: "/blog",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Healtcare",
      //   path: "/blog",
      //   newTab: false,
      // },
      {
        id: 44,
        title: "Pantries",
        path: "/error",
        newTab: false,
      },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
