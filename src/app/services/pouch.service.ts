import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import PouchDB from 'pouchdb';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PouchService {
  db: any;

  constructor(private router: Router) {
    this.db = new PouchDB('awesome-db');
  }

  addShow(newShow: Show): void {
    this.db.get('watchlist')
      .then((doc) => {
        if (doc.shows.filter(show => show.id === newShow.id).length === 0) {
          doc.shows.push(newShow);
          this.db.put(doc);
        }
        this.reloadCurrentRoute();
      })
      .catch(() => {
        this.db.put({
          _id: 'watchlist',
          shows: []
        });
      });
  }

  removeShow(newShow: Show): void {
    this.db.get('watchlist')
      .then((doc) => {
        doc.shows = doc.shows.filter(show => show.id !== newShow.id);
        this.db.put(doc);
        this.reloadCurrentRoute();
      })
      .catch(() => {
        this.db.put({
          _id: 'watchlist',
          shows: []
        });
      });
  }

  async getAllShows(): Promise<Array<Show>> {
    let toReturn = [];
    await this.db.get('watchlist')
      .then((doc) => {
        toReturn = doc.shows;
      });
    return toReturn;
  }

  reloadCurrentRoute(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('');
  }

}
