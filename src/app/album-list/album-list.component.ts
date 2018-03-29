import { Component, OnInit } from '@angular/core';
import { Album } from '../core/models/album';
import { AlbumService } from '../core/data/album.service';

@Component({
  selector: 'crates-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [AlbumService]
})
export class AlbumListComponent implements OnInit {

  private albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    var albumSubscription = this.albumService.getAlbums()
      .subscribe(albums => this.albums = albums);
    //console.log(this.albumService.getAlbums());
  }

}
