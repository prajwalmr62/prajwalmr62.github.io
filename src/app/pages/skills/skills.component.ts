import { Component, OnInit } from '@angular/core';
import { BoardComponent } from 'src/app/components/board/board.component';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [
    BoardComponent,
    BottomNavComponent,
    SkillCardComponent,
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillGroups = [

    {
      name: 'Frameworks and Libraries',
      skills: [
        {
          name: 'Angular',
          img: './assets/images/angular2.svg',
          proficiency: 90,
        },
        {
          name: 'React',
          img: './assets/images/react.png',
          proficiency: 90,
        },
        {
          name: 'NextJS',
          img: './assets/images/nextjs.png',
          proficiency: 80,
        },
        {
          name: 'Gatsby',
          img: './assets/images/gatsby.png',
          proficiency: 80,
        },
        {
          name: 'Redux',
          img: './assets/images/redux.png',
          proficiency: 80,
        },
        {
          name: 'NgRx',
          img: './assets/images/ngrx.png',
          proficiency: 80,
        },
        {
          name: 'Nx',
          img: './assets/images/nx.png',
          proficiency: 80,
        },
        {
          name: 'GraphQL',
          img: './assets/images/graphql.png',
          proficiency: 80,
        },
        {
          name: 'Flutter',
          img: './assets/images/flutter.png',
          proficiency: 80,
        },
        {
          name: 'JQuery',
          img: './assets/images/jquery.svg',
          proficiency: 80,
        },
        {
          name: 'PostCSS',
          img: './assets/images/postcss.svg',
          proficiency: 30,
        },
        {
          name: 'Bootstrap',
          img: './assets/images/bootstrap.svg',
          proficiency: 90,
        },
        {
          name: 'ASP.NET MVC',
          img: './assets/images/aspnet.svg',
          proficiency: 90,
        },
        {
          name: 'Kendo UI',
          img: './assets/images/kendo.png',
          proficiency: 70,
        },
        {
          name: 'NestJS',
          img: './assets/images/nestjs.png',
          proficiency: 70,
        },
        {
          name: 'NodeJS',
          img: './assets/images/nodejs.svg',
          proficiency: 60,
        },
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        {
          name: 'JavaScript',
          img: './assets/images/javascript.svg',
          proficiency: 90,
        },
        {
          name: 'TypeScript',
          img: './assets/images/typescript.svg',
          proficiency: 90,
        },
        {
          name: 'Dart',
          img: './assets/images/dart.png',
          proficiency: 80,
        },
        {
          name: 'Python',
          img: './assets/images/python.svg',
          proficiency: 80,
        },
        {
          name: 'C#',
          img: './assets/images/csharp.svg',
          proficiency: 80,
        },
        {
          name: 'Java',
          img: './assets/images/java.svg',
          proficiency: 60,
        },
        {
          name: 'PHP',
          img: './assets/images/php.svg',
          proficiency: 50,
        },
        {
          name: 'Golang',
          img: './assets/images/golang.png',
          proficiency: 20,
        },
      ]
    },
    {
      name: 'Markup Languages',
      skills: [
        {
          name: 'HTML5',
          img: './assets/images/HTML5.svg',
          proficiency: 90,
        },
        {
          name: 'XAML',
          img: './assets/images/xaml.svg',
          proficiency: 60,
        },
      ]
    },
    {
      name: 'Stylesheet Languages',
      skills: [
        {
          name: 'CSS3',
          img: './assets/images/CSS3.svg',
          proficiency: 90,
        },
        {
          name: 'SASS',
          img: './assets/images/sass.png',
          proficiency: 90,
        },
      ]
    },
    {
      name: 'Testing Frameworks',
      skills: [
        {
          name: 'Cypress',
          img: './assets/images/cypress.png',
          proficiency: 70,
        },
        {
          name: 'Jasmine',
          img: './assets/images/jasmine.svg',
          proficiency: 50,
        },
        {
          name: 'Jest',
          img: './assets/images/jest.svg',
          proficiency: 40,
        },
        {
          name: 'Karma',
          img: './assets/images/karma.png',
          proficiency: 50,
        },
        {
          name: 'Protractor',
          img: './assets/images/protractor.png',
          proficiency: 50,
        },
        {
          name: 'Taiko',
          img: './assets/images/taiko.svg',
          proficiency: 40,
        },
      ]
    },
    {
      name: 'Version Control',
      skills: [
        {
          name: 'Git',
          img: './assets/images/git.png',
          proficiency: 80,
        },
        {
          name: 'TFS',
          img: './assets/images/tfs.svg',
          proficiency: 60,
        },
      ]
    },
    {
      name: 'Cloud',
      skills: [
        {
          name: 'AWS',
          img: './assets/images/aws.svg',
          proficiency: 40,
        },
        {
          name: 'Azure',
          img: './assets/images/win.svg',
          proficiency: 10,
        },
      ]
    },
  ]

}
