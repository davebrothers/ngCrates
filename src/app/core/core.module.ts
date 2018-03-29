import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryAlbumService } from './data/in-memory-data/in-memory-album.service';
import { AlbumService } from './data/album.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forFeature(InMemoryAlbumService)
  ],
  declarations: [],
  providers: [InMemoryAlbumService, AlbumService]
})
export class CoreModule { }