import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './Components/items-list/items-list.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'items-list', component: ItemsListComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
