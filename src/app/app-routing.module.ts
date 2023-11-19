import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "sobre", component: AboutMeComponent},
  {path: "experiencia", component: ExperienceComponent},
  {path: "projetos", component: MyProjectsComponent},
  {path: "contato", component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
