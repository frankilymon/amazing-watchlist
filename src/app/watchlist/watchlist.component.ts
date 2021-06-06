import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';
import {PouchService} from '../services/pouch.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  shows: Array<Show>;
  constructor(private pouch: PouchService) {}

  ngOnInit(): void {
    this.loadShows();
  }

  async loadShows(): Promise<void> {
    this.shows = await this.pouch.getAllShows();
  }
}
