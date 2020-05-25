import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{App1Component} from './app1/app1.component';
import { LoginComponent } from './login/login.component';
import { App2Component } from './app2/app2.component';

// import{AppComponent} from './app.component';


const routes: Routes = [
{path:'',component:LoginComponent},
  {path:'events',component:App2Component},
  {path:'list/:id',component:App1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
