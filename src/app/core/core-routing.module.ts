import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './actualites/actualites.component';
import { ProposComponent } from './propos/propos.component';
import { FormationComponent } from './formation/formation.component';
import { ActivitesComponent } from './activites/activites.component';
import { ContactComponent } from './contact/contact.component';
import { ConnecterComponent } from './connecter/connecter.component';

const routes: Routes = [
  {
    path:'actualites',
    component: ActualitesComponent
  },
  {
    path:'propos',
    component:ProposComponent 
  },
  {
    path:'formation',
    component:FormationComponent 
  },
  {
    path:'activites',
    component:ActivitesComponent 
  },
  {
    path:'contact',
    component:ContactComponent 
  },
  {
    path:'connecter',
    component:ConnecterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
