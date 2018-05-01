import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostDetailService {
  constructor(private httpClient: HttpClient) { }

  loadPost(pageId: string): Observable<any> {
    return this.httpClient.get('/assets/data/postsDetail.json').map(result => {
      return result[pageId];
    });
  }
}