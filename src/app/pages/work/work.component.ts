import { Component } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent {
  certificatesDetails = [
    {
      name: "MCSD: App Builder - Certified 2017",
      img: "./assets/images/mcsd.png",
      link: "",
      skills: [
        "App Development",
        "Application Developer",
        "Azure",
        "C# Programming",
        "DevOps",
        "HTML5",
        "MCSD",
        "Mobile Applications",
        ".NET Developer",
        "Server Administration",
        "SharePoint Server",
        "Team Foundation Server",
        "Visual Studio",
        "Web Applications",
        "Web Developer",
        "Web Services",
      ],
    },
    {
      name: "MCSA: Web Applications - Certified 2017",
      img: "./assets/images/mcsa.png",
      link: "",
      skills: [
        "ASP.NET MVC",
        "Application Developer",
        "CSS3",
        "HTML5",
        "Programming",
        "JavaScript",
        "MCSA",
        "MCSD",
        "Web Administrator",
        "Web Applications",
        "Web Apps",
        "Web Developer",
      ],
    },
    {
      name: "Exam 486: Developing ASP.NET MVC Web Applications",
      img: "./assets/images/486.png",
      link: "",
      skills: [
        "ASP.NET MVC",
        "Application Architecture",
        "Application Debugging",
        "Application Troubleshooting",
        "Azure",
        "Microsoft ASP.NET",
        "Security Solutions",
        "User Experience Design",
      ],
    },
    {
      name: "Exam 480: Programming in HTML5 with JavaScript and CSS3",
      img: "./assets/images/480.png",
      link: "",
      skills: [
        "API Implementation",
        "CSS3",
        "Data Security",
        "HTML5",
        "JavaScript",
      ],
    },
  ];

  workDetails = [
    {
      role: "Senior Software Engineer",
      company: "F5 Networks",
      img: "./assets/images/f5.svg",
      from: "2022",
      to: "Present",
      description:
        "Currently working on improving F5XC Console developer experience and platform stability.",
    },
    {
      role: "Software Engineer III",
      company: "F5 Networks",
      img: "./assets/images/f5.svg",
      from: "2020",
      to: "2022",
      description:
        "Worked on saas aspect of F5XC, also worked on brand website of Volterra before acquisition. Technologies used are Angular, Nx, Gatsby, Nestjs.",
    },
    {
      role: "Senior Software Engineer",
      company: "OutreachCircle, Inc",
      img: "./assets/images/outreachcircle.jpeg",
      from: "2019",
      to: "2020",
      description:
        "I was responsible for developing OutreachCircle client platform, OutreachCircle supporter platform (Web & native app). Few of the technologies used were Angular, React, Flutter, GraphQL with Apollo-client on front-end.",
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Limited",
      img: "./assets/images/infosys.png",
      from: "2018",
      to: "2019",
      description: "Worked on front-end application development, mainly on SPA of React or Angular. Typical work included finding out feasible architectural solutions for project requirements, studying provided UX for feasibility, ease of implementation, performance, and experience. Then leading development team to implement the same.",
    },
    {
      role: "Systems Engineer",
      company: "Infosys Limited",
      img: "./assets/images/infosys.png",
      from: "2016",
      to: "2018",
      description: "Worked as full-stack developer in the earlier years. Was working on WCF, .NET, C#, and ASP.NET MVC for sometime, along with HTML, Razor template, JavaScript (with jQuery), and Sass (CSS3, Bootstrap, and PostCSS). Typical framework used are Angular, React, and ASP.NET MVC. Apart from these I've also spent sometime on creating POC's on various technologies, making wireframes and mockups for new project proposals.",
    },
    {
      role: "Bachelor of Engineering, Mechanical",
      company: 'Visvesvaraya Technological University, Belgaum',
      img: "./assets/images/vtu.png",
      from: '2011',
      to: '2015',
      description: 'Graduated with first class (70.01%).  Participated in many national level seminars and other stream related competitions. Participated in extra-curricular competitions.'
    }
  ];
}
