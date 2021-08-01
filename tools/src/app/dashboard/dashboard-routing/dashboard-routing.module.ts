import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { BuyHouseComponent } from '../../buy-house/buy-house.component'


const routes: Routes = [
  {
    path: 'dbd',
    pathMatch: 'full',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Component'
    }
  },
  {
    path: 'house',
    pathMatch: 'full',
    component: BuyHouseComponent,
    data: {
      title: 'Buy House Component'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    component: BuyHouseComponent,
    data: {
      title: 'Buy House Component'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class DashboardRoutingModule { }
