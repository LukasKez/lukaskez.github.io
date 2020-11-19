import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsModule } from '../planets/planets.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, PlanetsModule],
    exports: [PlanetsModule],
})
export class SharedModule { }
