import { FaInfoCircle, FaRocket, FaTools } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";

export const icons = {
  FaInfoCircle,
  FaRocket,
  FaTools,
  RiContactsBook3Fill,
};

export const navItems = [
  { name: "About", link: "#about", icon: "FaInfoCircle" },
  { name: "Projects", link: "#projects", icon: "FaRocket" },
  { name: "Skills", link: "#skills", icon: "FaTools" },
  { name: "Contact", link: "#contact", icon: "RiContactsBook3Fill" },
];

export const gridItems = [
  {
    id: 1,
    title: "I aim to craft meaningful experiences in every project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ready to communicate anytime for collaborations",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning React Native and Next.js.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Wanna connect with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portflio Website",
    des: "A portfolio website built with Next.js,Tailwind CSS,TypeScript and Framer Motion.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://neeraj-rai-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Top 20 Ideas",
    des: "A platform where you can share your ideas and get feedback from the community. Built with React.js,Tailwind CSS and Daisy UI.",
    img: "/p4.svg",
    iconLists: [
      "/react.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "https://top-ideas-react.vercel.app",
  },
  {
    id: 3,
    title: "NetMeet - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://net-meet.vercel.app",
  },
  {
    id: 4,
    title: "Image Alchemy - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://image-alchemy-ai-alpha.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    skills: [
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "React.js", icon: "/react.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
    ],
  },

  {
    id: 2,
    title: "Backend Development",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    skills: [
      { name: "Node.js", icon: "/nodejs.png" },
      { name: "Express", icon: "/express.svg" },
      { name: "MongoDB", icon: "/mongo.png" },
      { name: "MySQL", icon: "/mysql.svg" },
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    skills: [
      { name: "React Native", icon: "/native.svg" },
      { name: "Expo", icon: "/expo.svg" },
    ],
  },
  {
    id: 4,
    title: "Other Skills",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    skills: [
      { name: "Git", icon: "/gitt.svg" },
      { name: "C", icon: "/clang.svg" },
      { name: "C++", icon: "/c++.svg" },
      { name: "Python", icon: "/python.svg" },
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NR3101",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/neeraj-rai-41663216b/",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://github.com/NR3101",
  },
];
