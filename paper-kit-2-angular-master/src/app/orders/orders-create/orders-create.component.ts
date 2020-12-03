import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders-create",
  templateUrl: "./orders-create.component.html",
  styleUrls: ["./orders-create.component.css"],
})
export class OrdersCreateComponent implements OnInit {
  adults = 0;
  children = 0;
  constructor() {}

  ngOnInit(): void {}
}
