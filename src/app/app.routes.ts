import { RegisterPage } from './components/register/register.page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'entrance',
    loadComponent: () => import('./components/entrance/entrance.page').then((m) => m.EntrancePage),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'successful',
    loadComponent: () => import('./components/successful-registration/successful-registration.page').then((m) => m.SuccessfulRegistrationPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'main-dashboard',
    loadComponent: () => import('./components/main-dashboard/main-dashboard.page').then( m => m.MainDashboardPage)
  },
  {
    path: 'successful-registration',
    loadComponent: () => import('./components/successful-registration/successful-registration.page').then( m => m.SuccessfulRegistrationPage)
  },
];
