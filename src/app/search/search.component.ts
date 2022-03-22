import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  search(): void {
    if (this.query.length === 0) {
      return;
    }
    this.router.navigate(['search', this.query]);
  }
}
