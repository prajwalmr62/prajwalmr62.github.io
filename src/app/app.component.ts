import { Component } from '@angular/core';
import { NavigationEnd, Event, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
