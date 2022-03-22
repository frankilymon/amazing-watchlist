import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  eType = '404';
  eMsg = 'That page was not found.';
  constructor() { }

  ngOnInit(): void {
  }

}
