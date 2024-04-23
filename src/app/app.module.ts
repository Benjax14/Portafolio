import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router'

import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AppComponent } from './components/app/app.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutme', pathMatch: 'full'},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'projects', component: ProjectsComponent}
]

@NgModule({
  declarations: [
    HeaderComponent,
    AboutmeComponent,
    AppComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
