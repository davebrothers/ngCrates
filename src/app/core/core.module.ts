import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from './data/album.service';
import { InMemoryDataService } from './data/in-memory-data/in-memory-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AlbumService, InMemoryDataService]
})
export class CoreModule { }
