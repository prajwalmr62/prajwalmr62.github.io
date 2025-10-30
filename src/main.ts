import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { NgbModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { provideLottieOptions } from 'ngx-lottie';
import { environment } from './environments/environment';

// dynamic import factory for lottie-web (keeps bundle smaller)
export function playerFactory() {
  return import('lottie-web');
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      NgbProgressbarModule,
      NgbTooltipModule
    ),
    // Enable zoneless change detection. Make sure Zone.js is NOT loaded (see polyfills.ts).
    provideZonelessChangeDetection(),
    // provide empty/default lottie options with a player factory
    ...provideLottieOptions({ player: playerFactory })
  ]
}).catch(err => console.error(err));
