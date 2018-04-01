import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const appRoutes: Routes =
[
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'detail/:id',
    component: AlbumDetailComponent
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/albums'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }