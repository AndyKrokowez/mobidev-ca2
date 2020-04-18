import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    quotes: any;
    quote = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      this.quote = this.activatedRoute.snapshot.paramMap.get('quote');
    this.api.getQuote(this.quote).subscribe(res => {
      this.quotes = res[0];
    })
  }

}
