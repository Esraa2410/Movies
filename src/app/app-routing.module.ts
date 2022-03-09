import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { NetworkComponent } from './network/network.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthonGuard } from './authon.guard';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'singlemovie/:x/:y',
    component: SingleMovieComponent,
    canActivate: [AuthonGuard],
  },

  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => {
        return m.SettingsModule;
      }),
  },

  { path: 'movies', component: MoviesComponent, canActivate: [AuthonGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthonGuard] },
  { path: 'tv', component: TvShowComponent, canActivate: [AuthonGuard] },
  { path: 'network', component: NetworkComponent, canActivate: [AuthonGuard] },
  { path: '**', component: NetworkComponent, canActivate: [AuthonGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],

  exports: [RouterModule],
})
export class AppRoutingModule {}
