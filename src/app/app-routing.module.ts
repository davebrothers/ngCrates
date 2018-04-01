import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';

const appRoutes: Routes =
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/albums'
  },
  {
    path: 'albums',
    component: AlbumListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }