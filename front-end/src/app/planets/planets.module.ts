import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetCardComponent } from "./planet-card/planet-card.component";


@NgModule({
    declarations: [PlanetCardComponent],
    exports: [PlanetCardComponent],
    imports: [
        CommonModule
    ]
})
export class PlanetsModule { }
