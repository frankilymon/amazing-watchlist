import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  shows: Array<Show>;
  constructor() { }

  ngOnInit(): void {
    this.shows = [
      new Show({
        id: 16579,
        name: 'The Handmaid\'s Tale',
        language: 'English',
        genres: ['Drama', 'Science-Fiction'],
        status: 'Running',
        summary: '<p><b>The Handmaid\'s Tal…was taken from her.</p>',
        image: {medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/301/753818.jpg'}
      })
    ];
  }

}
