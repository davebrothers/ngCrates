import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../core/data/album.service';
import { Album } from '../core/models/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  private album: Album;
  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.info( this.route.snapshot.params['id']);
    var albumSubscription = this.albumService.getAlbums()
      .subscribe(albums => this.album = albums.find(a => a.id.toString() === this.route.snapshot.params['id']));
  }

}
