import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { PersonListComponent } from './person-list/person-list.component';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Main module.
 */
@NgModule({
  declarations: [MainComponent, PersonListComponent],
  providers:[MainService],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
