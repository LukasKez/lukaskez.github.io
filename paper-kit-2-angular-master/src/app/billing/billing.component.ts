import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.css"],
})
export class BillingComponent implements OnInit {
  options = [
    "PayPal",
    "Gift Card (applied before travel)",
    "Bank Transfer",
    "Directly Before Travel",
  ];

  constructor() {}

  ngOnInit(): void {}
}
