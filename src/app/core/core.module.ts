import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './data/in-memory-data/in-memory-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [InMemoryDataService]
})
export class CoreModule { }
