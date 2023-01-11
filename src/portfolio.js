/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Vedansh",
  logo_name: "I2EDC",
  // nickname: "harry / picleric",

  subTitle:
    " Institute Innovation and Entrepreneurship Development Centre (I2EDC) is the idea factory of IIT Jammu with a mission to create and support innovation, pre-incubation and entrepreneurship.",
  resumeLink:
    "https://drive.google.com/file/d/1wrkG62HyDgbUOjNxexCT891tcqd83_cK/view?usp=sharing",
  mail: "i2edc@iitjammu.ac.in",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  linkedin: "https://www.linkedin.com/company/ecell-iitj",
  gmail: "i2edc@iitjammu.ac.in",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/IITJammuOfficial/?__tn__=-UC*F",
  twitter: "https://twitter.com/vedansh_v_/",
  youtube: "https://www.youtube.com/channel/UCKO939XuodajVmrFQ57IDww",
};

const skills = {
  data: [
    {
      title: "About I2EDC",
      fileName: "DesignImg",
      skills: [
        `Institute Innovation and Entrepreneurship Development Centre (I2EDC) is the core centre of IIT Jammu
     with a mission to create and support innovation, pre-incubation and entrepreneurship. I2EDC has been
     set up at IIT Jammu to facilitate development of an entrepreneurial ecosystem in the organization with
     specific objectives and associated performance indicators. This is in line with National Innovation and
     Start up Policy 2019 of Govt. of India, which clearly states that entrepreneurship promotion and
     development must be one of the major dimensions of the higher educational institutes like IITs.
     `,
      ],
      softwareSkills: [],
    },
    {
      title: "Mission of I2EDC",
      fileName: "FullStackImg",
      skills: [
        " I2EDC has been set up at IIT Jammu to facilitate development of an entrepreneurial ecosystem in the organization with specific objectives and associated performance indicators. This is in line with National Innovation and Start up Policy 2019 of Govt. of India, which clearly states that entrepreneurship promotion and development must be one of the major dimensions of the higher educational institutes like IITs. I2EDC will act as a platform that will be available to all the faculty members, students as well as the staff members of the institute with an aim to give wings to entrepreneurial endeavours. At I2EDC, innovative products and processes will always be at the forefront backed by powerful insights and entrepreneurial spirit.",
      ],
      softwareSkills: [],
    },
    {
      title: "Vision of I2EDC",
      fileName: "CloudInfraImg",
      skills: [
        " I2EDC aspires to be a fully integrated platform for students, staff and faculty of IIT Jammu to actively engage them in innovation and entrepreneurship related activities. No innovative idea by the IIT Jammu fraternity, should remain unexplored for want of resources, be it technical or financial. It shall do so by creating an enabling infrastructure in the institute to be available to all of its members.",
      ],
      softwareSkills: [],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Prof. Rakesh Singhai-",
      subtitle: "Prof. Incharge Innovation and Entrepreneurship, IIT Jammu",
      logo_path: "rakesh.png",
      alt_name: "SSEC",

      descriptions: [
        `I am very pleased to announce that I2EDC is now well on its way to become an important pillar of IIT Jammu. Its purpose of existence is to help the IIT Jammu fraternity, specifically its students to become innovative and develop their ideas into novel products and services.
      Any new product or service cannot be termed as mechanical or electrical or software etc. The purpose of a product or service is to solve a problem and almost always it involves multi-disciplinary effort across departments.
      I2EDC is your go to place for converting your ideas into solutions. I2EDC will endeavor to help you create a multi-disciplinary team, mentor you through our internal and external experts and provide you the resources.
      Through the establishment of the Tinkerer’s lab, which will be run by the students themselves , we wish to inculcate the practice of doing things with your own hands.
      I do hope that you participate actively in the I2EDC activities and become a better and creative hands-on engineer.
      `,
      ],
      website_link: "https://iitjammu.ac.in/faculty/~rakeshsinghai",
    },
    {
      title: "Dr Ankit Dubey",
      subtitle: "Faculty Incharge, I2EDC, IIT Jammu",
      logo_path: "amit.jpg",
      alt_name: "SSEC",

      descriptions: [
        `Institute Innovation and Entrepreneurship Development Centre (I2EDC) is the idea factory of IIT Jammu. Where ideas get converted into product-level development.  An innovation is something original, new, and important in whatever field that breaks into (or obtains a foothold in) a market or society. IIT Jammu seriously considered the formal inclusion of this activity into the academics and research initiatives covering as wide a cross-section of faculty and students as possible. The institutionalisation of this process and its sustenance is a multipronged effort to create a core centre, the "I2EDC". This core centre, the I2EDC supports innovation, pre-incubation and entrepreneurship for students and faculty members. 

      I2EDC aspires to be a fully integrated platform for students, staff and faculty members of IIT Jammu to actively engage them in innovation and entrepreneurship-related activities. The I2EDC inculcates the culture of entrepreneurship at the institute level, as entrepreneurial mindset is distinct from academic mindset and also the main objective of I2EDC is to develop processes and systems to effectively utilize available resources to develop an ecosystem of Innovation leading to entrepreneurship.
      
      I invite all of you to use the I2EDC facility at its best level for ideation and innovation.
      `,
      ],
      website_link: "https://iitjammu.ac.in/faculty/~ankitdubey",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Tinkering Laboratory",
      subtitle: `Tinkering lab is a workspace with a clear objective “Learning by
      creating”, wherein people can experiment with, learn, develop and conceptualize different
      scientific ideas. It is a lot similar to the DIY method where the students are encouraged to
      apply the knowledge that they have gained in the classroom.The mission of Tinkerer’s Lab
      at IIT Jammu is to create workspaces and an ecosystem where young minds can learn
      innovation skills and sculpt their ideas through hands-on activities.
      `,
      logo_path: "google_logo.png",

      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Automation Laboratory",
      subtitle: `The Automation Lab allows the students to understand the
      requirement and functioning of Programmable Logic Controllers (PLCs). Here the students
      learn how to Program Industrial PLCs, work with Industrial Human Machine Interface
      (HMI), Industrial SCADA (Supervisory Control & Distributed Acquisition) and PLC
      networking using profibus and profinet.`,
      logo_path: "hackathon1.png",

      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "AGASTYA",
      subtitle: `It is India’s 2oth largest high performance computing facility.
      Envisioning and commissioning the facility came with a long set of challenges but
      despite everything, it now stands tall and high at the campus.`,
      logo_path: "hackathon2.png",

      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "3D Printer",
      subtitle: `3D printing is predicted to be the mainstream technology for serial
      production. At IIT Jammu, we have a 3D printer by Divide by zero for students to
      interact, experiment and ignite their minds to look and plan for the future with
      advanced and most sustainable industrial technology and vision.`,
      logo_path: "HakinCodes.jfif",

      alt_name: "Opensource Event",
      color_code: "#7A7A7A",
    },
    {
      title: "Central Instrumentation Facility",
      subtitle: `It can be easily called as the unicorn of
      technological excellence. The brand new NMRI spectrometer, SCXRD, HRMS, XPS
      and UV-VIS-NIR spectrometers are now operational at the campus to undertake the
      research of a global level. The facility is in the final stage of commissioning a powder
      X-Ray diffractometer and Fourier Transform Infrared Spectroscopy.`,
      logo_path: "Olympiad.png",

      alt_name: "Postman",
      color_code: "#f36c3d",
      // color_code: "#fffbf3",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Projects",
  // subtitle: "Work, Internship and Volunteership",
  description:
    "I2EDC aims the creativity of students which they could implement to find solutions to real life problems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Ongoing Projects",
      experiences: [
        {
          title: "Quadruped walking robot platform",
          logo_path: "robot.jpg",
          description: ` This is a 4 legged walking robot that will be capable of walking on uneven and unknown terrains. 
          This allows traversability of the robot both indoors and outdoors.
          The final version/prototype of this robot will be life-sized (like the dimensions of the dog)
          A 3D printed version of a smaller version of this robot has been successfully developed and tested.
          Presently, the development of a single leg of the final robot is in progress
          It’ll be used for detecting land-mines and for security, surveillance, defence and commercial applications.  `,
          color: "#ee3c26",
        },
        {
          title: "Quadcopter based surveillance and mapping",
          logo_path: "drone.jpg",
          description: ` This is a flying robot with the ability to carry an additional 1.5kg payload. Various kinds of payloads can be attached to it for different kinds of applications.
          The main focus is on autonomous applications using GPS.
          This drone has been successfully developed and tested.
          Presently, a high definition camera is being attached to this drone.
          This will be used for surveillance and aerial 2D/3D mapping applications.  `,
          color: "#008000",
        },
        {
          title: "Stretchable Electronics",
          logo_path: "electronics.jpg",
          description: `This is based on PDMS substrate which is bio-compatible in nature.
          A new multi-layered PDMS structure approach to bring stretchability in the device. For all kinds of adhesion requirements, various ratios of PDMS:Cross-linker have been used.
          All kinds of wearable devices can be based on these technologies to augment our daily lives. With the kind of state of art technology available to the common man today, the bar has already been set for the performance of such devices. Hence, its imperative that these stretchable devices perform at this level and should be capable of adapting to the market to serve the mass requirement.Hence, it becomes inevitable to use metal interconnects to provide very low resistance and easy adhesion to commercial electronic components. Another aspect of such devices is an adhesion ability with which we can attach it to various kinds of surfaces.
          Robotic skin applications can also be based on this technology.
          Especially in the medical sector, these stretchable devices can increase the scope of monitoring and ease and comfort of the patient.
           `,
          color: "#ff9955",
        },
        {
          title: "Oxygen Concentrator",
          logo_path: "oxygen.jpg",
          description: `With the ongoing Corona and Covid pandemic, in-house Oxygen Concentrator is being built to tackle the oxygen cylinder shortage requirements. `,
          color: "#0059c9",
        },
        {
          title: "CNC 3D Router",
          logo_path: "CNCRoute.jpg",
          description: ` A 3D CNC Router can be used for milling, engraving and cutting various kinds of materials like plastics, wood, soft, composites and non-ferrous metals.
          An inhouse tabletop CNC 3D Router machine has been successfully developed for 2D,2.5D and 3D machining applications.
          It uses stepper motors and inhouse developed antibacklash leadscrew-nut unit.`,
          color: "#4B0082",
        },
        {
          title: "Self-balancing Bot",
          logo_path: "selfbalance.jpg",
          description: ` A self-balancing bot is like an inverted pendulum which needs dynamic control schemes to make it balance on two wheels in an upright position like a human being.
          This kind of robot has higher manoeuvrability and can move through tight spaces while occupying less area and volume.
          This project will mainly be used for research and educational purposes and to try novel/existing control algorithms & schemes using Machine Learning, Reinforcement Learning.
          `,
          color: "#ffd700",
        },
      ],
    },
    {
      title: "Completed Projects",
      experiences: [
        {
          title: "3D printer",
          logo_path: "printer.jpg",
          description: ` An in-house 3D printer has been developed with a stainless steel body. This printer has been designed keeping in view of rapid and fast prototyping.
          It’ll also be used for research purposes for novel material development, induction based extruder. This induction based extruder will allow faster heating and cooling, hence increasing the overall efficiency and speed of 3D printing.
           `,
          color: "#0071C5",
        },
        {
          title: "Robotic Arm",
          logo_path: "arm.jpg",
          description: ` This is a 6 DoF robotic ARM.
          It has been successfully developed and tested. It is presently based on Arduino platform.
          Raspberry Pi and Google Coral Edge TPU is being added to this system to allow Machine Learning and AI capabilities.
          ROS capability is also being added to it for a variety of applications.
          This will be used for developing applications for the industry, research and for educational purposes
           `,
          color: "#a60000",
        },
        {
          title: "Spark CNC etching machine",
          logo_path: "CNC.jpg",
          description: ` A high voltage spark generator using a TV-LOT has been attached to an in-house developed CNC machine. This spark generator is being used to etch metals in a controlled manner using the CNC machine.
          This is being used to etch metal interconnect pattern that has been attached on the PDMS substrate for stretchable electronics.
          This direct metal etching capability makes it possible to etch metals like a PCB in a rapid fashion. This is a better approach than chemical etching as its much more simpler, cost-effective, fast and has very less residual waste.  `,
          color: "#2f4f2f",
        },
        {
          title: "Hand Sanitizers",
          logo_path: "sanitizer.jpg",
          description: `In view of COVID19 pandemic
          which has caused a paucity of hand-sanitizers in the
          market, a dedicated team of researchers from IIT Jammu
          have successfully produced a cost-effective hand sanitizer
          as per the guidelines laid down by the WHO. The team has
          prepared 30 liters of hand sanitizer and has enough raw
          material to prepare 100 liters, if required. `,
          color: "#4285F4",
        },
        {
          title: "Face protection shield:",
          logo_path: "face.jpg",
          duration: "Sept 2020 - Oct 2020",
          description: `: During the Covid-19
          pandemic, the students at IIT Jammu developed face
          protection shields for doctors, police and armed
          forces of J&K in the Tinkering Lab of IIT Jammu. The
          event had also been witnessed by various news
          channels and print media organizations. 
          `,
          color: "#ff8c00",
        },

        // color: "#282b6c",
        // color: "#a60000",
        // color: "#62cff0",
        // color: "#0059c9",
        // color: "#ffffff",
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Events",
  description:
    "Like other IITs and institutes, we are also following the calendar ( list of activities) given by MIC IIC every year. Based upon the performance and evaluation, IIT Jammu also got stars rating on certificate. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Startup Summer School",
      url:
        "https://www.facebook.com/IITJammuOfficial/photos/a.113872016936802/354922812831720/",
      description:
        "I2EDC in collaboration with iB Hubs Startup School conducted the 7 day workshop on Startup and Entrepreneurship where students were introduced to the terminology used in startup with its future scope and risks.",
    },
    {
      id: "1",
      name: "One day outreach workshop",

      description:
        "I3C, in collaboration with HSS Dept, IIT Jammu, organised a day long outreach workshop for the students from Army Public School, Miran Sahib. It involved guest lectures from IITian teachers and various competitions as well.",
    },
    {
      id: "2",
      name: "STEM Workshop on Innovation",

      description:
        "I2EDC organised a STEM workshop conducted by Dr. Amitabh Sharma, CEO and Cofounder of STEM Academy of USA. A total of 50 students and teachers from nearby schools attended workshop. Various CNC machines and equipments were demonstrated.",
    },
    {
      id: "3",
      name: "Hack tHe builD 2.0",
      url: "https://www.hackthebuild.com",
      description:
        "I2EDC in collaboration with Coding Club IIT Jammu organised a national level hackathon with real life problem statements in defense area.",
    },
    {
      id: "4",
      name: "Startup Class:An Entrepreneur's Journey",
      url:
        "https://www.facebook.com/IITJammuOfficial/photos/a.113872016936802/259484769042192/",
      description:
        "Mr. Abhinav Jain, Founder & CEO- Shop101 and an alumnus of the prestigious Indian Institute of Technology Kanpur, and IIM Ahmedabad for an exciting Entrepreneurial Talk to encourage the young minds of IIT Jammu.",
    },
    {
      id: "5",
      name: "Getting started with Tinkering",
      url: "",
      description:
        "Two days online workshop for getting started with Tinkering lab, for school teachers and students of Jammu",
    },
    {
      id: "6",
      name: "DPW100, Design Practicum Workshop course",
      url: "",
      description:
        "DPW100, Design Practicum Workshop course for students of IIT Jammu.",
    },
    {
      id: "7",
      name: "Webinar on Design and Innovation",
      url: "https://www.youtube.com/watch?v=9j_TisSEVfg&t=1s",
      description: `Webinar on "Design and Innovation: Sensors, Antennas, and Systems",
        By Gautam Chatopadhayay, NASA. Attended by about 256 participants including students, faculty members and researchers from BEL, IITs and more participants from  about 8 Countries.
        `,
    },
    {
      id: "8",
      name: "Webinar on Innovations",
      url: "https://www.youtube.com/watch?v=kL5qW2t_iM4",
      description: `Spacecraft Antennas for NASA Deep Space and Earth Missions,
        By Nacir Chahat, JPL, NASA        
        `,
    },
    {
      id: "9",
      name: "Webinar on Startup Ecosystems",
      url:
        "https://drive.google.com/drive/folders/1dao-QEsnfzqA-4hRa7ubfhxipEeAmYvn?usp=sharing",
      description: `Webinar on " The IITs can be the game changers in nurturing the startup ecosystem to build an Atmanirbhar Bharat " by Prof. A Bandopadhayay, IIT Kanpur. Attended by about 120 participants inclusing students and faculty members of IIT Jammu.`,
    },
    {
      id: "10",
      name: "Town Hall Talk on the Journey of Entrepreneur",
      url:
        "https://www.facebook.com/IITJammuOfficial/photos/a.113872016936802/260318055625530",
      description: `By Sh. Sharad Kumar Saraf, Chairman – BoG, IIT Jammu
        Chairman & Managing Director
        Technocraft Group of Industries, Mumbai.
        The webinar was attended by about 200 particepents including students and faculty members from IIT Jammu.
        `,
    },
    {
      id: "11",
      name: "Town Hall Talk on Entrepreneurship and its Nuances",
      url:
        "https://www.facebook.com/IITJammuOfficial/photos/a.113872016936802/260318055625530",
      description: `By Kiran Desh Pandey, Mentor and angel investor, Board / Technology Advisory: Board advisor for Quality Kiosk. 
        Attended by about 73 students and faculty members of IIT Jammu.
        `,
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
