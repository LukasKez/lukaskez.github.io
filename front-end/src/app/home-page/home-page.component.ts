import { Component, OnInit } from '@angular/core';
import { Planet } from '../planets/planet.interface';
import { PlanetDataService } from './../planets/planet-data.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    planets: Planet[];

    constructor(private planetData: PlanetDataService) { }

    ngOnInit(): void {
        this.planets = this.planetData.getPlanets();
    }

}
