import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MainService {
    constructor(private http: HttpClient) { }

    getPostsList() {
        return this.http.get('/assets/data/postsSample.json');
    }
}
