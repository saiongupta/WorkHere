import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gpt,
    threed,
    editor,
    threejs,
} from "../assets";
  
export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Services",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "signup",
        title: "Signup",
    },
    {
        id: "login",
        title: "Login",
    },
];
  
const services = [
    {
        title: "Unified Workspace",
        icon: web,
    },
    {
        title: "Immersive 3D Environment",
        icon: mobile,
    },
    {
        title: "Strong Backend",
        icon: backend,
    },
    {
        title: "AI-Powered Insights",
        icon: creator,
    },
];
  
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];
  
const experiences = [
    {
        title: "WorkHere AI",
        company_name: "WorkGPT",
        icon: gpt,
        iconBg: "#383E56",
        date: "",
        points: [
            "Understands complex queries and context effectively.",
            "Automates various work tasks like reporting, data analysis, and scheduling.",
            "Seamlessly integrates with workplace tools for enhanced productivity.",
            "Adapts and learns from user interactions for personalized assistance.",
        ],
    },
    {
        title: "WorkHere  3Ds",
        company_name: "WorkHere 3D Environment",
        icon: threed,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Utilizes cutting-edge rendering techniques for realistic and high-quality 3D visuals.",
            "Features a user-friendly interface for easy navigation and efficient workflow.",
            "Offers a wide range of editing tools for modeling, texturing, animation, and rendering.",
            "Supports collaboration among team members, allowing for seamless sharing and editing of 3D projects.",
        ],
    },
    {
        title: "WorkHere Studio Code",
        company_name: "WorkHere Code Editor",
        icon: editor,
        iconBg: "#383E56",
        date: "",
        points: [
            "Provides intelligent code completion, syntax highlighting, and error detection for efficient coding.",
            "Seamlessly integrates with version control systems like Git, enabling collaborative coding and easy tracking of changes.",
            "Offers extensive customization options for themes, plugins, and key bindings to tailor the editor to individual preferences.",
            "Includes productivity-enhancing tools such as code snippets, code refactoring, and multi-cursor editing for faster development workflows.",
        ],
    },
];
  
const testimonials = [
    {
        testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [];

export { services, technologies, experiences, testimonials, projects };