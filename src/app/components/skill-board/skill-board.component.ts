import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-board',
  templateUrl: './skill-board.component.html',
  styleUrls: ['./skill-board.component.scss']
})
export class SkillBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      src: './assets/images/typescript.svg',
      alt: 'TypeScript'
    },
    {
      src: './assets/images/angular2.svg',
      alt: 'Angular'
    },
    {
      src: './assets/images/react.png',
      alt: 'React'
    },
    {
      src: './assets/images/nx.png',
      alt: 'Nx'
    },
    {
      src: './assets/images/nextjs.png',
      alt: 'NextJS'
    },
    {
      src: './assets/images/gatsby.png',
      alt: 'Gatsby'
    },
    {
      src: './assets/images/flutter.png',
      alt: 'Flutter'
    },
    {
      src: './assets/images/graphql.png',
      alt: 'GraphQL'
    },
    {
      src: './assets/images/cypress.png',
      alt: 'Cypress'
    },
    {
      src: './assets/images/CSS3.svg',
      alt: 'CSS3'
    },
    {
      src: './assets/images/sass.png',
      alt: 'SASS'
    },
    {
      src: './assets/images/nestjs.png',
      alt: 'NestJS'
    },
  ];

}
