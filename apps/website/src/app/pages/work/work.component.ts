import { Component } from "@angular/core";
import { BoardComponent } from "src/app/components/board/board.component";
import { BottomNavComponent } from "src/app/components/bottom-nav/bottom-nav.component";

@Component({
    selector: "app-work",
    templateUrl: "./work.component.html",
    styleUrls: ["./work.component.scss"],
    imports: [
        BoardComponent,
        BottomNavComponent
    ]
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
      role: "Principal Software Engineer",
      company: "F5 Networks",
      img: "./assets/images/f5.svg",
      from: "2022",
      to: "Present",
      description:
        "Working on F5XC foundation team. Majorly focused on experience (DX) improvements and stability of the platform",
    },
    {
      role: "Senior Software Engineer",
      company: "F5 Networks",
      img: "./assets/images/f5.svg",
      from: "2022",
      to: "2024",
      description:
        "Worked on F5XC Console platform, SaaS features, developer experience (DX) improvements, and stability of the platform.",
    },
    {
      role: "Software Engineer III",
      company: "F5 Networks",
      img: "./assets/images/f5.svg",
      from: "2020",
      to: "2022",
      description:
        "Worked on F5XC Console platform, brand websites, multiple documentation portals.",
    },
    {
      role: "Senior Software Engineer",
      company: "OutreachCircle, Inc",
      img: "./assets/images/outreachcircle.jpeg",
      from: "2019",
      to: "2020",
      description:
        "Worked on developing OutreachCircle platform, which is an entirely new, research-based approach of connecting with voters by utilising the supporter’s personal contact book. Tech stack used: Angular, React, Flutter, NextJS for various apps along with GraqhQL.",
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Limited",
      img: "./assets/images/infosys.png",
      from: "2018",
      to: "2019",
      description: "Worked on setting up frontend app for CPQ solution of an Agro-Tech company, which has to be used by dealers, customers, and guest users on desktop-web, mobile-web, and mobile-app. Tech stack used: Angular, React, .net Core, and related SAP products.",
    },
    {
      role: "Systems Engineer",
      company: "Infosys Limited",
      img: "./assets/images/infosys.png",
      from: "2016",
      to: "2018",
      description: "Worked on analytical tool for a leading Aerospace company. Entire presentation layer was re-written using ASP.NET MVC, jQuery, and Bootstrap in the span of 8 months.",
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
