export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
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
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
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
      title: "Smart Clinic Management System",
      des: "An AI-powered clinic platform featuring responsive UIs, LLM/RAG integration, and strict type safety.",
      img: "/clinic.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/ai.svg"],
      liveLink: "https://smart-clinic-swart.vercel.app/",
      repoLink: "https://github.com/mohamed-ayad40/smart-ai-clinic", // حط رابط الريبو الحقيقي هنا
    },
    {
      id: 2,
      title: "Real-Time Communication Platform",
      des: "Scalable chat & P2P video streaming platform using Socket.io and native WebRTC, containerized via Docker.",
      img: "/whatsapp.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/web-socket.svg", "/firebase.svg"],
      liveLink: "https://whatsapp-client-delta.vercel.app/",
      repoLink: "https://github.com/mohamed-ayad40/whatsapp-clone", // حط رابط الريبو الحقيقي هنا
    },
    {
      id: 3,
      title: "Full-Fledged E-Commerce Engine",
      des: "End-to-end commercial platform featuring a dynamic shopping cart, order management, and secure payments.",
      img: "/amazon.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/stripe.svg", "/firebase.svg"],
      liveLink: "https://clone-7044a.web.app/",
      repoLink: "https://github.com/mohamed-ayad40/amazon-clone", // حط رابط الريبو الحقيقي هنا
    },
    {
      id: 4,
      title: "Agricultural Transport & Personnel Dispatch System",
      des: "A clean, highly operational web platform designed to automate sugar beet transport logistics. Features role-based dashboards for gate officers, admins, and supervisors to track vehicle check-ins and personnel shifts.",
      img: "/military_project.png", 
      iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongodb.svg"], 
      liveLink: "https://transport-management-frontend-azure.vercel.app/login",
      repoLink: "https://github.com/mohamed-ayad40/military-transport-system", // حط رابط الريبو الحقيقي هنا
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Mohamed is a rare talent who bridges intense technical expertise with rock-solid logic. Whenever a complex engineering problem arose, he was the first engineer I recommended, knowing he would deliver high-performance architecture.",
      name: "Peer Review & Advocate",
      title: "Full Stack Developer & Colleague",
    },
    {
      quote:
        "As a software developer, Mohamed demonstrates exceptional mastery over modern tech stacks like Node.js, Next.js, and Docker. His ability to architect scalable microservices and think through clean, maintainable code is truly remarkable.",
      name: "Tech Mentor Review",
      title: "Software Engineering Mentor & Coach",
    },
    {
      quote:
        "During our military service, whenever a mission-critical or highly custom programming task appeared, Mohamed was our absolute go-to engineer. His dedication to engineering a complete fleet management system under rigid constraints was inspiring.",
      name: "Military Unit Colleague",
      title: "Technical Operations Peer",
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
    name: "huggingface",
    img: "/hf.svg", // هقولك تجيب دول منين حالا
    nameImg: "/hfName.svg",
  },
  {
    id: 4,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineer | Military Service Project",
      desc: "Architected a web-based Logistics and Fleet Management System from scratch. Engineered core modules for routing and automated driver assignment under strict environmental constraints.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full Stack Software Developer",
      desc: "Built scalable web architectures, modern real-time systems, and AI-integrated products utilizing Node.js, Next.js, and Docker ecosystems.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      title: "Github",
      link: "https://github.com/mohamed-ayad40"
    },
    {
      id: 2,
      img: "/instagram.svg",
      title: "Instagram",
      link: "https://www.instagram.com/mohamed_ayad40"
    },
    {
      id: 3,
      img: "/link.svg",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mohamedayad4000"
    },
    {
      id: 4,
      img: "facebook.svg",
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61557341575089&locale=ar_AR"
    }
  ];