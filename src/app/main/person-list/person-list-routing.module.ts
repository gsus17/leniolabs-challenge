import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonListComponent
  }
];

/**
 * Routes config module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonListRoutingModule { }
