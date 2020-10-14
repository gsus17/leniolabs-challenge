import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'person-list'
      },
      {
        path: 'person-list',
        loadChildren: () => import('./person-list/person-list.module').then(m => m.PersonListModule)
      },
      {
        path: 'person-detail',
        loadChildren: () => import('./person-detail/person-detail.module').then(m => m.PersonDetailModule)
      },
    ]
  }
];

/**
 * Routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
