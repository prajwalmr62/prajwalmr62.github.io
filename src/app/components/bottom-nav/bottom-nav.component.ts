import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
  standalone: true,
  imports: [
    BoardComponent,
    RouterModule
  ]
})
export class BottomNavComponent {

  @Input() previousUrl?: string;
  @Input() previousText?: string;
  @Input() nextText?: string;
  @Input() nextUrl?: string;
}
