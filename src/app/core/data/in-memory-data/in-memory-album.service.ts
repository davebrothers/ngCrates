import { Album } from '../../models/album';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryAlbumService implements InMemoryDbService{

  createDb(): {} {
    const albums = [
      { id: 1, 
        title: 'Animals', 
        artist: 'Pink Floyd',
        coverImage: 'https://img.discogs.com/0BKX1TrplHillBS2Y8gAKlTuyCE=/fit-in/500x495/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-391322-1500480666-6948.jpeg.jpg',
        releaseYear: 1977,
        tracks: ['Pigs on the Wing, Pt. 1',
          'Dogs',
          'Pigs (Three Different Ones',
          'Sheep',
          'Pigs on the Wing, Pt. 2'],
        discogsMasterReleaseUrl: 'https://www.discogs.com/Pink-Floyd-Animals/master/10370'
      },
      { id: 2, 
        title: 'At War with the Mystics', 
        artist: 'The Flaming Lips',
        coverImage: 'https://img.discogs.com/X1bMCBMBnixeYWwNXD7Iv5glrkc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-657355-1249399997.png.jpg',
        releaseYear: 2006,
        tracks: [
          'The Yeah Yeah Yeah Song',
          'Free Radicals',
          'The Sound of Failure',
          'My Cosmic Autumn Rebellion',
          'Vein of Stars',
          'The Wizard Turns On...',
          'It Overtakes Me',
          'Mr. Ambulance Driver',
          'Haven\'t Got a Clue',
          'The W.A.N.D.',
          'Pompeii Am Götterdämmerung',
          'Goin\' On'
        ],
        discogsMasterReleaseUrl: 'https://www.discogs.com/The-Flaming-Lips-At-War-With-The-Mystics/master/122158'     
      },
      { id: 3, 
        title: 'Familiars', 
        artist: 'The Antlers',
        coverImage: 'https://img.discogs.com/2G-YwoPeYK8CHhWdkMT0kwYsG9w=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5797369-1402937980-8579.jpeg.jpg',
        releaseYear: 2014,
        tracks: [
          'Palace',
          'Doppelgänger',
          'Hotel',
          'Intruders',
          'Director',
          'Revisited',
          'Parade',
          'Surrender',
          'Refuge'
        ],
        discogsMasterReleaseUrl: 'https://www.discogs.com/Antlers-Familiars/master/698875'
      },
      { id: 4, 
        title: 'Recovering the Satellites', 
        artist: 'Counting Crows',
        coverImage: 'https://img.discogs.com/wVHMJiz9iPsyjXVhuKx_XnA52Hs=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1869525-1266713037.jpeg.jpg',
        releaseYear: 1996,
        tracks: [
          'Catapult',
          'Angels of the Silences',
          'Daylight Fading',
          'I\'m Not Sleeping',
          'Goodnight Elisabeth',
          'Children in Bloom',
          'Have You Seen Me Lately?',
          'Miller\'s Angels',
          'Another Horsedreamer\'s Blues',
          'Recovering the Satellites',
          'Monkey',
          'Mercury',
          'A Long December',
          'Walkaways'
        ],
        discogsMasterReleaseUrl: 'https://www.discogs.com/Counting-Crows-Recovering-The-Satellites/master/76468'
      },
      { id: 5, 
        title: 'Roses in the Snow', 
        artist: 'Emmylou Harris',
        coverImage: 'https://img.discogs.com/EyQD-pFqPlJy17lpOQYnoF_0Kto=/fit-in/594x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1811029-1303615724.jpeg.jpg',
        releaseYear: 1980,
        tracks: [
          'Roses in the Snow',
          'Wayfaring Stranger',
          'Green Pastures',
          'The Boxer',
          'Darkest Hour is Just Before Dawn',
          'I\'ll Go Stepping Too',
          'You\'re Learning',
          'Jordan',
          'Miss the Mississippi',
          'Gold Watch and Chain'
        ],
        discogsMasterReleaseUrl: 'https://www.discogs.com/Emmylou-Harris-Roses-In-The-Snow/master/154842'
    },
      { id: 6, 
        title: 'Greetings from Asbury Park, N.J.', 
        artist: 'Bruce Springsteen',
        coverImage: 'https://img.discogs.com/XkSLr44tGqzInWALkbCqJOECvfA=/fit-in/594x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2683678-1485008857-9080.jpeg.jpg',
        releaseYear: 1973,
        tracks: [
          'Blinded by the Light',
          'Growin\' Up',
          'Mary Queen of Arkansas',
          'Does this Bus Stop at 82nd Street?',
          'Lost in the Flood',
          'The Angel',
          'For You',
          'Spirit in the Night',
          'It\'s Hard to Be a Saint in the City'
        ],
        discogsMasterReleaseUrl: 'https://www.discogs.com/Bruce-Springsteen-Greetings-From-Asbury-Park-NJ/master/26750'
      }
    ];
    return {albums};
  }
  constructor() { }
}