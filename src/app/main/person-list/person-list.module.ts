import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonListRoutingModule } from './person-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/**
 * Person list module.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PersonListRoutingModule
  ]
})
export class PersonListModule { }
