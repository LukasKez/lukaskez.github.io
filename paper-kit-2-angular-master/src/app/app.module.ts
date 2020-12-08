import { StatisticsComponent } from "./statistics/statistics.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { AuthModule } from "./auth/auth.module";
import { NouisliderModule } from "ng2-nouislider";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";
import { HomeComponent } from "./home/home.component";
import { PlannerComponent } from "./planner/planner.component";
import { PackagesComponent } from "./packages/packages.component";
import { PlanetsComponent } from "./planets/planets.component";
import { OrdersIndexComponent } from "./orders/orders-index/orders-index.component";
import { OrdersCreateComponent } from "./orders/orders-create/orders-create.component";
import { OrdersModifyComponent } from "./orders/orders-modify/orders-modify.component";
import { OrdersCancelComponent } from './orders/orders-cancel/orders-cancel.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PlannerComponent,
    PackagesComponent,
    PlanetsComponent,
    OrdersIndexComponent,
    OrdersCreateComponent,
    OrdersModifyComponent,
    StatisticsComponent,
    OrdersCancelComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AuthModule,
    AppRoutingModule,
    NouisliderModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
