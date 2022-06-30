import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
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
