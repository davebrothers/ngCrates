import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../core/models/album';

@Component({
  selector: 'crates-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;
  
  public avatarImage: string = "/assets/img/Vinyl_record.svg";
  
  constructor() { }

  seeOnDiscogs() {
    window.location.href = this.album.discogsMasterReleaseUrl.toString();
  }

  ngOnInit() {
  }

}
