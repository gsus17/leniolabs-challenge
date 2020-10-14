import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonDetailRoutingModule } from './person-detail-routing.module';
import { PersonDetailComponent } from './person-detail.component';

/**
 * Person detail module.
 */
@NgModule({
  declarations: [PersonDetailComponent],
  imports: [
    CommonModule,
    PersonDetailRoutingModule
  ]
})
export class PersonDetailModule { }
