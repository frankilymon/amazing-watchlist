import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Show} from '../models/show.model';
import {Episode} from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  baseURL = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShows(query: string): Observable<Array<Show>> {
    const url = `${this.baseURL}/search/shows`;
    let params = new HttpParams();
    params = params.append('q', query);
    return this.http.get<Array<{score: number, show: any}>>(url, {params})
      .pipe(
        map(results => {
          const shows = [];
          results.forEach(result => {
            shows.push(new Show(result.show));
          });
          return shows;
        })
      );
  }

  getShowWithEps(sid: string): Observable<any> {
    const url = `${this.baseURL}/shows/${sid}`;
    let params = new HttpParams();
    params = params.append('embed', 'episodes');
    return this.http.get<any>(url, {params})
      .pipe(
        map(results => {
          console.log(results);
          const output = {show: new Show(results),
            episodes : []
          };
          results._embedded.episodes.forEach(rawEp =>
            output.episodes.push(new Episode(rawEp))
          );
          return output;
        })
      );
  }
}
