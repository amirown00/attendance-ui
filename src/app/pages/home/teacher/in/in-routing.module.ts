import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InPage } from './in.page';

const routes: Routes = [
  {
    path: '',
    component: InPage
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InPageRoutingModule {}
