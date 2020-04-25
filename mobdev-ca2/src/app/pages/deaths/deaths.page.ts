import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { SearchService, SearchType } from 'src/app/services/search.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    deathsId: Observable<any>
  //  searchTerm: string = '';
  //  type: SearchType = SearchType.all;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data', data);
        });
    }

    openDetails(death) {
        let deathsId = death.death_id;
        this.router.navigateByUrl(`/tabs/deaths/${deathsId}`);

    }
// after tried many different resources, still not working
 //   searchChanged() {
 //       this.deathsId = this.searchService.searchData(this.searchTerm, this.type);
  //  }


}