import { Component } from '@angular/core';
import { NavigationEnd, Event, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ContactBoardComponent } from './components/contact-board/contact-board.component';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NavBarComponent,
    BottomNavComponent,
    RouterOutlet,
    ContactBoardComponent,
  ]
})
export class AppComponent {
  title = 'prajwalmr62-github-io';

  constructor(private router: Router){}

  ngOnInit(){
    if(typeof gtag === 'function'){
      this.router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        
          gtag('event', 'page_view', {
            page_path: event.urlAfterRedirects
        });
        });
    }
  }
}
