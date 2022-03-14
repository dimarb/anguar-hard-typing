import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRoutes } from './router/demo';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    [DemoRoutes]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
