import { Component, OnInit, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Album } from '../core/models/album';

@Component({
  selector: 'crates-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album;
  constructor() { }

  ngOnInit() {
  }

}
