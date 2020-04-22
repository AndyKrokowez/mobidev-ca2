import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum SearchType {
    all = '',
    quote = 'quote',
    character = 'character'

}


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    url = `https://www.breakingbadapi.com/api/episodes`;

    constructor(private http: HttpClient) { }

    searchData(author: string, type: SearchType): Observable<any> {
        return this.http.get(`${this.url}?s=${encodeURI(author)}&type=${type}`).pipe(
            map(results => results['Search'])
        );
    }
    getDetails(id) {
        return this.http.get(`${this.url}?i=${id}&plot=full`);
    }

}
