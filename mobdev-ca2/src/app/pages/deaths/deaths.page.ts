import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: any;
    deathsId: Observable<any>
    searchQuery: string = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data', data);
        });


        // to get the total number of deaths

 //       this.deaths = this.api.getDeath();
 //       this.deaths.subscribe(data => {
 //           console.log('my data', data);
 //       });
 // include on deaths.page.html 
 // to show the total number of deaths
// Number total of Death: {{ death.deathCount }}

    }
        
    
}