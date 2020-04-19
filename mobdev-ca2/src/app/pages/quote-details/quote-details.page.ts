import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    quote: any;
    quoteId = null;
    isFavouriteQuote = false;


    constructor(private activatedRoute:
        ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }
    
        ngOnInit() {

        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');


        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.quote_id));
        });
     this.favouriteService.isFavouriteCharacter(this.quoteId).then(isFavorite => {
            this.isFavouriteQuote = isFavorite;
        });
    }

    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.quoteId).then(() => {
            this.isFavouriteQuote = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.quoteId).then(() => {
            this.isFavouriteQuote = false;
        });
    }
}