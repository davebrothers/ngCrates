import { Injectable } from '@angular/core';
import { Album } from '../models/album';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() : Album[] {
    return [
      new Album('Animals', 'Pink Floyd'),
      new Album('Christmas on Mars', 'The Flaming Lips'),
      new Album('Familiars', 'The Antlers'),
      new Album('Recovering the Satellites', 'Counting Crows'),
      new Album('Evangeline', 'Emmylou Harris'),
      new Album('Nothing Was the Same', 'Drake')
    ]
  }
}
