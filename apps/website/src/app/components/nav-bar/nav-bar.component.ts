
import { Component, Inject, DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
})
export class NavBarComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}

  onContactClick(event: Event): void {
    event.preventDefault();
    const targetElement = this.document.querySelector('#contact');
    const rect = targetElement?.getBoundingClientRect();
    window.scrollTo({
      top: rect?.top,
      behavior: 'smooth'
    })
  }
}
