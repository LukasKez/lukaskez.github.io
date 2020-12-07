import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders-modify",
  templateUrl: "./orders-modify.component.html",
  styleUrls: ["./orders-modify.component.css"],
})
export class OrdersModifyComponent implements OnInit {
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
