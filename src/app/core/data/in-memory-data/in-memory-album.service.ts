import { Album } from '../../models/album';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryAlbumService implements InMemoryDbService{

  createDb(): {} {
    const albums = [
      { id: 1, title: 'Animals', artist: 'Pink Floyd'},
      { id: 2, title: 'Christmas on Mars', artist: 'The Flaming Lips'},
      { id: 3, title: 'Familiars', artist: 'The Antlers'},
      { id: 4, title: 'Recovering the Satellites', artist: 'Counting Crows'},
      { id: 5, title: 'Evangeline', artist: 'Emmylou Harris'},
      { id: 6, title: 'Nothing Was the Same', artist: 'Drake'}
    ];
    return {albums};
  }
  constructor() { }
}
