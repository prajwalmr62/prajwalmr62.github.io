import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SkillBoardComponent } from './components/skill-board/skill-board.component';
import { ContactBoardComponent } from './components/contact-board/contact-board.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';
import { BoardComponent } from './components/board/board.component';
import { RandomTriviaComponent } from './pages/about/components/random-trivia/random-trivia.component';
import { SkillCardComponent } from './pages/skills/components/skill-card/skill-card.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoCardComponent,
    SkillBoardComponent,
    ContactBoardComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    BoardComponent,
    RandomTriviaComponent,
    SkillCardComponent,
    BottomNavComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
