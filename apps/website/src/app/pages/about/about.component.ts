import { Component, OnInit } from '@angular/core';
import { BoardComponent } from 'src/app/components/board/board.component';
import { BottomNavComponent } from 'src/app/components/bottom-nav/bottom-nav.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [
        BoardComponent,
        BottomNavComponent,
    ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books = [
    {
      name: 'Sapiens, Yuval Noah Harari',
      link: 'https://www.goodreads.com/book/show/23692271-sapiens',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg'
    },
    {
      name: 'Start With Why, Simon Sinek',
      link: 'https://www.goodreads.com/book/show/7108725-start-with-why',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360936414l/7108725.jpg'
    },
    {
      name: 'American Gods, Neil Gaiman',
      link: 'https://www.goodreads.com/book/show/4407.American_Gods',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1258417001l/4407.jpg'
    },
    {
      name: 'The Archer, Paulo Coelho',
      link: 'https://www.goodreads.com/book/show/52585195-the-archer',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588572028l/52585195.jpg'
    },
    {
      name: 'A Thousand Spendid Suns, Khaled Hosseini',
      link: 'https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345958969l/128029.jpg'
    },
    {
      name: 'The Intelligence Trap, Daviv Robson',
      link: 'https://www.goodreads.com/book/show/41817546-the-intelligence-trap',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539750711l/41817546.jpg'
    },
    {
      name: 'Man\'s Search for Meaning, Victor Frankl',
      link: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SY475_.jpg'
    },
    {
      name: 'To Kill a Mockingbird, Harper Lee',
      link: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'
    },
    {
      name: 'The 3-Minute Rule, Brant Pinvidic',
      link: 'https://www.goodreads.com/book/show/49351774-the-3-minute-rule',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563684903l/49351774._SX318_SY475_.jpg'
    },
    {
      name: 'Me Before You, Jojo Moyes',
      link: 'https://www.goodreads.com/book/show/17347634-me-before-you',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631688766l/17347634._SX318_.jpg'
    },
  ]

}
