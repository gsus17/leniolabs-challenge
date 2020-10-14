import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail.component';

const routes: Routes = [
  {
    path: '',
    data: null,
    component: PersonDetailComponent
  }
];

/**
 * Routes config module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonDetailRoutingModule { }
