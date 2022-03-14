import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {TypesDemoComponent} from "../types-demo/types-demo.component";

const routes: Routes = [
  { path: 'answers', component: TypesDemoComponent }
];

export const DemoRoutes: ModuleWithProviders<any> = RouterModule.forChild(routes);

