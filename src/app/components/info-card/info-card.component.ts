import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() art!: string;
  @Input() altText: string = 'section illustration';
  @Input() revert: boolean = false;
  @Input() heading: string = '';
  @Input() description!: string;
  @Input() link: string | null = null;
  @Input() linkText: string = 'Read More';

  constructor() { }

  ngOnInit(): void {
  }

}
