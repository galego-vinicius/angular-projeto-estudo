import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'gallery', component:GalleryComponent },
    { path:'**', component:NotFoundComponent },
];
