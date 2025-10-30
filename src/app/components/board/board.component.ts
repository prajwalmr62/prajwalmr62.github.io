import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: true
})
export class BoardComponent implements OnInit {

  @Input() header!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
