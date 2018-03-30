import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { CoreModule } from './core/core.module';
import { AlbumCardComponent } from './album-card/album-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
