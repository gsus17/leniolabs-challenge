import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { PersonListComponent } from './person-list/person-list.component';

/**
 * Main module.
 */
@NgModule({
  declarations: [MainComponent, PersonListComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
