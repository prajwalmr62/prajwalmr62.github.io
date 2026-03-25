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
      company: "F5, Inc",
      img: "./assets/images/f5.svg",
      from: "2024",
      to: "Present",
      description: {
        intro: "Leading frontend architecture initiatives for the F5 Distributed Cloud platform, driving developer experience improvements and platform stability alongside feature development.",
        bullets: [
          "Led UI efforts for FedRAMP compliance, ensuring UI adheres to security and audit requirements.",
          "Improved build performance by 30% and e2e performance by 11x by leveraging Nx optimization.",
          "Leading multiple tracks; shipped 10+ key features on schedule.",
          "Recognized with multiple F5 group awards for delivery excellence."
        ]
      }
    },
    {
      role: "Senior Software Engineer",
      company: "F5, Inc",
      img: "./assets/images/f5.svg",
      from: "2022",
      to: "2024",
      description: {
        intro: "Architected and developed features for the F5 Distributed Cloud Platform.",
        bullets: [
          "Collaborated with cross-functional teams to deliver key features impacting 1000+ enterprise clients.",
          "Established key architectural patterns for UI development; onboarded multiple teams onto the Console Platform.",
          "Mentored 5+ junior developers on best practices and architectural patterns.",
          "Initiated and led SaaS track, shipping critical subscription and billing features ahead of schedule.",
          "Received multiple shoutouts and F5 group awards for delivery excellence and technical leadership."
        ]
      }
    },
    {
      role: "Software Engineer III",
      company: "F5, Inc",
      img: "./assets/images/f5.svg",
      from: "2020",
      to: "2022",
      description: {
        intro: "Developed and maintained the F5 Distributed Cloud Console platform, marketing websites, and technical documentation portals using Angular, React, and Gatsby.",
        bullets: [
          "Built and deployed comprehensive API documentation portal in 2 weeks using React, Redux, and Express JS, serving 500+ developers.",
          "Shipped 20+ features for the Console platform, contributing to increased user adoption and platform stability.",
          "Recognized for consistent delivery and technical excellence."
        ]
      }
    },
    {
      role: "Senior Software Engineer",
      company: "VoterCircle, Inc.",
      img: "./assets/images/outreachcircle.jpeg",
      from: "2019",
      to: "2020",
      description: {
        intro: "Led frontend development for OutreachCircle, a research-driven voter engagement application that enables canvassing through personal networks. Architected and built multiple applications (web, Android, iOS) using React, Angular, Next.js, and Flutter with GraphQL integration. OutreachCircle is now one of the largest election canvassing platforms in the US.",
        bullets: []
      }
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Ltd.",
      img: "./assets/images/infosys.png",
      from: "2018",
      to: "2019",
      description: {
        intro: "Architected and led UI development (team size 10+) for a multi-platform CPQ (Configure- Price-Quote) solution for a major Agro-Tech company, supporting desktop web, mobile web, and native mobile applications for dealers, customers, and guest users.",
        bullets: [
          "Built responsive, accessible UIs using Angular and React with .NET Core backend integration."
        ]
      }
    },
    {
      role: "Systems Engineer",
      company: "Infosys Ltd.",
      img: "./assets/images/infosys.png",
      from: "2016",
      to: "2018",
      description: {
        intro: "Led UI efforts for the redevelopment of an analytics platform for a leading Aerospace company, modernizing the presentation layer from legacy code to ASP.NET MVC, jQuery, and Bootstrap. Delivered complete rewrite in 8 months.",
        bullets: []
      }
    },
    {
      role: "Bachelor of Engineering, Mechanical",
      company: 'Visvesvaraya Technological University, Belgaum',
      img: "./assets/images/vtu.png",
      from: '2011',
      to: '2015',
      description: {
        intro: 'Graduated with first class (70.01%).  Participated in many national level seminars and other stream related competitions. Participated in extra-curricular competitions.',
        bullets: []
      }
    }
  ];
}
