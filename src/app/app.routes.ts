import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./main/main.component') },
  { path: 'course/:id', loadComponent: () => import('./about/about.component') },
];
