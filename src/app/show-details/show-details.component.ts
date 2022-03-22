import {Component, Input, OnInit} from '@angular/core';
import { Episode } from '../models/episode.model';
import { Show } from '../models/show.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {TvmazeService} from '../services/tvmaze.service';
import {PouchService} from '../services/pouch.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  sid: string;
  show: Show;
  episodes: MatTableDataSource<Episode>;
  tableHeaders: Array<string>;
  constructor(private route: ActivatedRoute, private tvService: TvmazeService, private router: Router, private pouch: PouchService) {
    this.tableHeaders = ['number', 'name', 'aired', 'summary'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.sid = p.id;
      this.tvService.getShowWithEps(this.sid).subscribe(results => {
          this.show = results.show;
          this.episodes = new MatTableDataSource(results.episodes);
        }
      );
    });
  }

  applyFilter(e: Event): void {
    const filterValue = (e.target as HTMLInputElement).value;
    this.episodes.filter = filterValue.trim().toLowerCase();
  }

  addShow(): void {
    this.pouch.addShow(this.show);
  }
}
