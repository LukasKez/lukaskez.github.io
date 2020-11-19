import { Injectable } from '@angular/core';
import { Planet } from './planet.interface';
import { PLANETS } from "./mock-planet-data";

@Injectable({
    providedIn: 'root'
})
export class PlanetDataService {
    planets: Planet[] = PLANETS;

    constructor() { }

    getPlanets() {
        return this.planets;
    }
}
