import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './actualites/actualites.component';
import { ProposComponent } from './propos/propos.component';
import { FormationComponent } from './formation/formation.component';
import { ActivitesComponent } from './activites/activites.component';
import { ContactComponent } from './contact/contact.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { ConseilComponent } from './conseil/conseil.component';
import { DepComponent } from './dep/dep.component';
import { TicComponent } from './tic/tic.component';
import { SiComponent } from './si/si.component';
import { ClubComponent } from './club/club.component';

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
  {
    path:'conseil',
    component:ConseilComponent 
  },
  {
    path:'dep',
    component:DepComponent 
  },
  {
    path:'tic',
    component:TicComponent 
  },
  {
    path:'si',
    component:SiComponent 
  },
  {
    path:'club',
    component:ClubComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
