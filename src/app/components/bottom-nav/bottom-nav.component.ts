import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {

  @Input() previousUrl?: string;
  @Input() previousText?: string;
  @Input() nextText?: string;
  @Input() nextUrl?: string;
}
