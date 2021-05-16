import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  @Input() show: Show;

  constructor() {
  }

  ngOnInit(): void {
  }

}
