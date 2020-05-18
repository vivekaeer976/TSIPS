//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
//import { EditTreatyComponent } from './treaty/edittreaty/edittreaty.component';
//import { LoginComponent } from './login/login.component';
//import { AuthGuard } from '././_helpers';

//const routes: Routes = [
//  { path: "", redirectTo: "login", pathMatch: "full" },
//  { path: "login", component: LoginComponent },
//  {
//    path: '',
//    component: EditTreatyComponent,
//    canActivate: [AuthGuard]
//  },
//  { path: '**', redirectTo: '' }
//];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule {

//}
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { EditTreatyComponent } from './treaty/edittreaty/edittreaty.component';
import { ActionbydateofmodificationComponent } from './treaty/actionbydateofmodification/actionbydateofmodification.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'treaty',
    component: EditTreatyComponent,
    canActivate: [AuthGuard],   
  },
  {
    path: 'dateofmodification',
    component: ActionbydateofmodificationComponent,
    canActivate: [AuthGuard],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
