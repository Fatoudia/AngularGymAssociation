import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ GymnaseListComponent } from './components/gymnase-list/gymnase-list.component';
import { GymnaseDetailsComponent } from './components/gymnase-details/gymnase-details.component';
import { AddGymnaseComponent } from './components/add-gymnase/add-gymnase.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'Gymnase', component: GymnaseListComponent },
  { path: 'gymnase/:id', component: GymnaseDetailsComponent },
  { path: 'add', component: AddGymnaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
