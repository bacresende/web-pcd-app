import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: 'landing-page',
        component: LandingPage
    },
    {
        path: '**',
        component: PageNotFound 
    }
];
