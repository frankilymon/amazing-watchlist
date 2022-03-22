import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import { Episode } from '../models/episode.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  shows: Array<Show>;
  episodes: Array<Episode>;
  constructor() {
    this.shows = [
      new Show({
      name: 'Doctor Who',
      language: 'English',
      genres: ['Sci-Fi', 'Action', 'Adventure'],
      id: 110,
      summary: 'A show about a time travelling alien called The Doctor.',
      status: 'ongoing',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
    }),
      new Show({
        name: 'The Magicians',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about magicians and their trauma.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      }),
      new Show({
        name: 'Smallville',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 220,
        summary: 'A show about Superman as a teenager.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      })];
    this.episodes = [
      new Episode({
        id: 101,
        name: 'pilot',
        season: 1,
        episode: 1,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 102,
        name: 'second',
        season: 1,
        episode: 2,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 201,
        name: 'Second pilot',
        season: 2,
        episode: 1,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 202,
        name: 'pilot',
        season: 2,
        episode: 2,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 203,
        name: 'pilot',
        season: 2,
        episode: 3,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
    ];
  }

  getShows(): Observable<Array<Show>> {
    return of<Array<Show>>(this.shows);
  }

  getEpisodes(): Observable<Array<Episode>> {
    return of<Array<Episode>>(this.episodes);
  }

  getShow(id: string): Observable<Show> {
    return of<Show>(this.shows[0]);
  }
}
