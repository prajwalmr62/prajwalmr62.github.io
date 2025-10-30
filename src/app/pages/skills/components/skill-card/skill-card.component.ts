import { Component, Input, OnInit } from '@angular/core';
import { NgbProgressbar, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  standalone: true,
  imports: [
    NgbProgressbar,
    NgbTooltip
  ]
})
export class SkillCardComponent implements OnInit {

  @Input() name!: string;
  @Input() img!: string;
  @Input() proficiency!: number;

  get scaleType(): string {
    if(this.proficiency > 60){
      return 'success';
    } else if(this.proficiency > 30){
      return 'warning';
    }
    return 'danger';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
