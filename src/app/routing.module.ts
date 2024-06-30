import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from "./projects/projects.component";
import {SkillsComponent} from "./skills/skills.component";
import {OutsideComponent} from "./outside/outside.component";

const routes: Routes = [
  {path: '', component: OutsideComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'Skills', component: SkillsComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

