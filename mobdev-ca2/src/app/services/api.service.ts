import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }

  getCharacters() {
      return this.http.get('https://www.breakingbadapi.com/api/characters')
  }
  getCharacter(name) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${name}`)
  }

  getQuotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }
  getQuote(quote) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${quote}`)
  }

  getDeaths() {
      return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
  }
  
}