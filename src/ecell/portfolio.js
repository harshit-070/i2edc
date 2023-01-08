const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "John Smith",
  role: "Front End Engineer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Case Study Competition",
    description:
      "E-Cell organised its first event with 90+ teams with problem statements on real life business cases.",
    stack: ["#casestudycompetition"],
  },
  {
    name: "Alohomora",
    description:
      "A three day online treasure hunt which gives you the opportunity to explore the world of Entrepreneurship, Start-Ups and many more.",
    stack: ["#treasurehunt"],
  },
  {
    name: "Vision Quest",
    description:
      "A competition where 10 teams competed against each other in bringing out the best possible solutions to various problem statements. The top 3 teams were rewarded with Amazon gift vouchers whilst consolation prizes were given to 2 teams as well.",
    stack: ["#casestudycompetition"],
  },
  {
    name: "Why on Entrepreneurship",
    description:
      "E-Cell organised a webinar on Why Entrepreneurship hosted by Mr. Rahul Varms, CEO and Co-founder, Unschool. More than 40 students and entrepreneurs from the country took part in the event where Mr. Varma reflected upon his journey to become an entrepreneur which inspired one and all.",
    stack: ["#webinar"],
  },
  {
    name: "I2EDC Logo Competition",
    description:
      "E-Cell organised its first ever logo competition for its parent centre,  I2EDC with submissions more than 50. ",
    stack: ["#logocompetition"],
  },
];

const team = [
  {
    name: "Bhavyta Aggarwal",
    img: "",
    position: "Coordinator",
  },
  {
    name: "Pranavi Chintala",
    img: "",
    position: "Manager",
  },
  {
    name: "Shivanshu Tripathi",
    img: "",
    position: "Manager",
  },
  {
    name: "Shruti Seth",
    img: "",
    position: "Treasurer",
  },
];
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "i2edc@iitjammu.ac.in",
};

export { header, about, projects, skills, team, contact };
