import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})

export class CharacterDetailsPage implements OnInit {
    character: any;
    characterId = null;
    isFavouriteCharacter = false;


    constructor(private activatedRoute:
        ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {

        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];

        });

        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFavorite => {
            this.isFavouriteCharacter = isFavorite;
        });
    }

    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacter = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacter = false;
        });
    }
}