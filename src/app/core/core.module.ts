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


@NgModule({
  declarations: [
    ProposComponent,
    ActualitesComponent,
    FormationComponent,
    ActivitesComponent,
    ContactComponent,
    ConnecterComponent
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
    ConnecterComponent
  ]
})
export class CoreModule { }
