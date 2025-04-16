import { MdDevices } from "react-icons/md";
import { CiBezier } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";

import photo1 from "../image/photo_2024-09-03_12-36-51.jpg";
import todo1 from "../image/todo1.jpg";
import todo2 from "../image/todo2.jpg";
import todo3 from "../image/todo3.jpg";
import weather1 from "../image/weather3.PNG";
import weather2 from "../image/wather2.PNG";
import form from "../image/form.PNG";
import game1 from "../image/game1.PNG";
import game2 from "../image/game2.PNG";
import game3 from "../image/game3.PNG";
import shop1 from "../image/shop1.PNG";
import shop2 from "../image/shop2.PNG";
import shop3 from "../image/shop3.PNG";

import state1 from "../image/state1.PNG";
import state2 from "../image/state2.PNG";
import state3 from "../image/state3.PNG";

import apple1 from "../image/apple1.PNG";
import apple2 from "../image/apple2.PNG";
import apple3 from "../image/apple3.PNG";

export const NavBar = [
  { id: 1, name: "home", link: "" },
  { id: 2, name: "Services", link: "" },
  { id: 3, name: "About", link: "" },
  { id: 4, name: "Portfolio", link: "" },
  { id: 5, name: "Contact", link: "" },
];

export const CardServeses = [
  {
    id: 1,
    image: <CiBezier />,
    title: "UI / UX DESIGN",
    discrption:
      "Crafting intuitive, visually appealing, and user-friendly interfaces involves wireframing and prototyping.",
  },
  {
    id: 2,
    image: <HiMiniComputerDesktop />,
    title: "WEB DEVELOPMENT",
    discrption:
      "Creating complex interactive web apps using HTML, CSS and JavaScript for frontend development.",
  },
  {
    id: 3,
    image: <IoCodeSlashOutline />,
    title: "WEB APPLICATION",
    discrption:
      "Building interactive web applications using React.js and next.js",
  },
  {
    id: 4,
    image: <MdDevices />,
    title: "Responsive Design",
    discrption:
      "Optimizing websites and apps for different devices ensures a seamless experience across desktops, tablets, and smartphones.",
  },
  {
    id: 5,
    image: <IoRocketOutline />,
    title: "PERFORMANCE OPTIMIZATION",
    discrption:
      "Optimizing frontend code and assets to improve loading times , SEO and overall performance.",
  },
  {
    id: 6,
    image: <IoCodeSlashOutline />,
    title: "COLLABORATION",
    discrption:
      "Crafting intuitive, visually appealing, and user-friendly interfaces involves wireframing and prototyping.",
  },
];

export const buttons = [
  { id: 1, cat: "Frameworks" },
  { id: 2, cat: "language" },
  { id: 3, cat: "Tools" },
];

const phoneNumber = "963997013656"; // رقم الواتس آب بصيغة دولية
const message = "مرحبا، أود التحدث معك"; // الرسالة الافتراضية
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export const skills = [
  {
    id: 1,
    icon: <FaReact />,
    name: "React19",
    cat: "Frameworks",
    class: "text-cyan-500",
    width: "90",
  },
  {
    id: 3,
    icon: <FaGithub />,
    name: "Github",
    cat: "Tools",
    class: "text-black",
    width: "90",
  },
  {
    id: 2,
    icon: <FaAngular />,
    name: "Angular17",
    cat: "Frameworks",
    class: "text-red-700",
    width: "80",
  },
  {
    id: 4,
    icon: <SiJavascript />,
    name: "javaScript",
    cat: "language",
    class: " text-yellow-400",
    width: "95",
  },
  {
    id: 6,
    icon: <RiNextjsFill />,
    name: "Next",
    cat: "Frameworks",
    class: " text-black",
    width: "85",
  },
  {
    id: 5,
    icon: <BiLogoTypescript />,
    name: "TypeScript",
    cat: "language",
    class: " text-blue-500",
    width: "90",
  },
  {
    id: 7,
    icon: <FaGitAlt />,
    name: "git",
    cat: "Tools",
    class: "text-orange-700 ",
    width: "90",
  },
  {
    id: 8,
    icon: <SiTailwindcss />,
    name: "Tailwind",
    cat: "Frameworks",
    class: "text-blue-400",
    width: "95",
  },
  {
    id: 9,
    icon: <FaHtml5 />,
    name: "Html5",
    cat: "language",
    class: "text-orange-700 ",
    width: "100",
  },
  {
    id: 11,
    icon: <SiBootstrap />,
    name: "Bootstrap",
    cat: "Frameworks",
    class: "text-purple-600",
    width: "75",
  },
  {
    id: 10,
    icon: <IoLogoCss3 />,
    name: "Css3",
    cat: "language",
    class: "text-blue-500 ",
    width: "90",
  },
  {
    id: 11,
    icon: <BiLogoMongodb />,
    name: "Mongodb",
    cat: "language",
    class: "text-green-600",
    width: "95",
  },
  {
    id: 12,
    icon: <FaNode />,
    name: "node.js",
    cat: "language",
    class: "text-green-800",
    width: "95",
  },
  {
    id: 13,
    icon: <SiExpress />,
    name: "Exprees",
    cat: "Frameworks",
    class: "text-white",
    width: "95",
  },
  {
    id: 14,
    icon: <BiLogoCPlusPlus />,
    name: "C++",
    cat: "language",
    class: "text-blue-600",
    width: "95",
  },
];

export const projectData = [
  {
    id: 8,
    imag1: apple1,
    name: "apple store",
    categories: "Web Design",
    description:
      "I developed an interactive website to showcase the features of the iPhone 15 Pro and Pro Max using 3D models. The site allows users to explore the phone's design, switch between official colors, and view key technical specifications like the processor, camera, and battery — all within a responsive and visually appealing interface.",
    img2: apple2,
    img3: apple3,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://apple-website-ebon-zeta.vercel.app/",
  },
  {
    id: 1,
    imag1: photo1,
    name: "Prayer times",
    categories: "Web App",
    description:
      "A Prayer Times application provides users with the daily prayer times based on their location. The app usually includes features like location-based time calculations, notifications for prayer times, and a user-friendly interface to display the prayer schedule.",
    img2: photo1,
    img3: photo1,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://prayers-timings-pi.vercel.app/",
  },
  {
    id: 2,
    imag1: todo1,
    name: "Todo List",
    categories: "Web App",
    description:
      "A Todo List application allows users to manage their tasks by adding, editing, and deleting tasks. It’s a classic project for developers to learn about handling user inputs, managing state, and working with CRUD (Create, Read, Update, Delete) operations in a frontend application.",
    img2: todo2,
    img3: todo3,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://todolist-1-dun.vercel.app/",
  },
  {
    id: 3,
    imag1: weather1,
    name: "Weather",
    categories: "Web App",
    description:
      "A Weather App provides users with real-time weather information for a specific location. The app usually includes features like displaying the current weather, a 5-day forecast, and additional weather details such as humidity, wind speed, and more. This project is great for learning how to work with APIs, handle user input, and present data dynamically.",
    img2: weather1,
    img3: weather2,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://my-react-app-mu-red.vercel.app/",
  },
  {
    id: 4,
    imag1: form,
    name: "loan application form",
    categories: "Web App",
    description:
      "A loan application form project for a bank is a digital solution that allows customers to apply for loans online. This project involves building a user-friendly interface where users can fill out loan application forms, and the data is securely submitted to the bank’s backend system for further processing.",
    img2: form,
    img3: form,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://form-sooty-eight.vercel.app",
  },
  {
    id: 5,
    imag1: game1,
    name: "game store ",
    categories: "Web Design",
    description:
      "A game store project is an e-commerce platform designed specifically for selling video games, game-related merchandise, and accessories. It allows users to browse, purchase, and download games, as well as engage with game reviews, ratings, and discussions. This project focuses on creating a user-friendly online store for video game enthusiasts, offering a seamless shopping experience.",
    img2: game2,
    img3: game3,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://gaming-rosy.vercel.app/",
  },
  {
    id: 6,
    imag1: shop1,
    name: "shopping",
    categories: "Web App",
    description:
      "A shoe store project is an e-commerce platform designed for selling footwear online. The goal is to create a user-friendly, visually appealing, and functional store where customers can browse, filter, and purchase shoes from various brands and categories. The project includes features for product discovery, secure payments, and a smooth shopping experience, ensuring users can find the right pair of shoes efficiently.",
    img2: shop2,
    img3: shop3,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://shopping-fk7i.vercel.app",
  },
  {
    id: 7,
    imag1: state1,
    name: "shopping",
    categories: "Web App",
    description:
      "A shoe store project is an e-commerce platform designed for selling footwear online. The goal is to create a user-friendly, visually appealing, and functional store where customers can browse, filter, and purchase shoes from various brands and categories. The project includes features for product discovery, secure payments, and a smooth shopping experience, ensuring users can find the right pair of shoes efficiently.",
    img2: state2,
    img3: state3,
    Features: [
      "Responsive Layout Design",
      "Detailed documentation",
      "SEO optimized",
    ],
    webSite: "https://state-mangment.vercel.app",
  },
];

export const SocialMeda = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/fiez-alhag-7a9007320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  { id: 2, icon: <FaGithub />, link: "" },
  { id: 3, icon: <FaWhatsapp />, link: whatsappLink },
];
