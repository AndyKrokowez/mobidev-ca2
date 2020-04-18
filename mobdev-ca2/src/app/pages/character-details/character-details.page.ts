import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    characters: any;
    charactersName = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      this.charactersName = this.activatedRoute.snapshot.paramMap.get('name');
    this.api.getCharacter(this.charactersName).subscribe(res => {
      this.characters = res[0];
    })
  }

}
