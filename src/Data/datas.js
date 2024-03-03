import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const navigations = [
  {
    title: "Home",
    to: "home-page",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Be a Reseller",
    to: "be-a-reseller",
  },
];

const contacts = [
  {
    title: <FaTiktok />,
    link: "https://www.tiktok.com/@jaytrippervlog",
  },
  {
    title: <FaFacebookF />,
    link: "https://www.facebook.com/jaytripperskitchen",
  },
  {
    title: <RiInstagramFill />,
    link: "https://www.instagram.com/jaytrippers/",
  },
];

const marketings = [
  {
    image: require("../images/facebookPage.png"),
  },
  {
    image: require("../images/mainFacebookPage.png"),
  },
  {
    image: require("../images/titkok.png"),
  },
];

export { navigations, contacts, marketings };
