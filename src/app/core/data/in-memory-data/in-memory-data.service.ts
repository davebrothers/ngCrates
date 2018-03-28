import { Album } from '../../models/album';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'Rxjs/Observable';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb(): {} | Observable<{}> | Promise<{}> {
    return [
      new Album('Animals', 'Pink Floyd'),
      new Album('Christmas on Mars', 'The Flaming Lips'),
      new Album('Familiars', 'The Antlers'),
      new Album('Recovering the Satellites', 'Counting Crows'),
      new Album('Evangeline', 'Emmylou Harris'),
      new Album('Nothing Was the Same', 'Drake')
    ];
  }
  constructor() { }

}
