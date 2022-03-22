import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../services/tvmaze.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  shows: Array<Show>;
  query: string;
  constructor(private route: ActivatedRoute, private tvService: TvmazeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.query = p.query;
      this.tvService.getShows(this.query).subscribe(
        (shows) => { this.shows = shows; });
    });
  }

}
