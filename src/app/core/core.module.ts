import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProposComponent } from './propos/propos.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { FormationComponent } from './formation/formation.component';
import { ActivitesComponent } from './activites/activites.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ConnecterComponent } from './connecter/connecter.component';
import { ConseilComponent } from './conseil/conseil.component';
import { DepComponent } from './dep/dep.component';
import { TicComponent } from './tic/tic.component';
import { SiComponent } from './si/si.component';
import { ClubComponent } from './club/club.component';


@NgModule({
  declarations: [
    ProposComponent,
    ActualitesComponent,
    FormationComponent,
    ActivitesComponent,
    ContactComponent,
    ConnecterComponent,
    ConseilComponent,
    DepComponent,
    TicComponent,
    SiComponent,
    ClubComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  exports:[
    ProposComponent,
    ActualitesComponent,
    ActivitesComponent,
    FormationComponent,
    ContactComponent,
    ConnecterComponent,
    ConseilComponent,
    DepComponent,
    TicComponent,
    SiComponent,
    ClubComponent
  ]
})
export class CoreModule { }
