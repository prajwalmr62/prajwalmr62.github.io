import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'work',
    component: WorkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
