import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders-create",
  templateUrl: "./orders-create.component.html",
  styleUrls: ["./orders-create.component.css"],
})
export class OrdersCreateComponent implements OnInit {
  adults = 0;
  children = 0;
  pets = 0;

  services = [
    { name: "Hotel", color: "info" },
    { name: "Catering", color: "danger" },
    { name: "Transport", color: "primary" },
    { name: "Child amenities", color: "success" },
    { name: "Guide", color: "default" },
    { name: "Insurance", color: "warning" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
