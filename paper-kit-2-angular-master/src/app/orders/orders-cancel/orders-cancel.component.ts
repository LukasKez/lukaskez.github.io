import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders-cancel",
  templateUrl: "./orders-cancel.component.html",
  styleUrls: ["./orders-cancel.component.css"],
})
export class OrdersCancelComponent implements OnInit {
  refundOptions = "refundable";
  cancellationReason = "Cancellation reason..";
  services = 0;
  support = 0;
  overall = 0;

  constructor() {}

  ngOnInit(): void {
    this.refundOptions =
      +JSON.parse(localStorage.getItem("refundable")) === 1
        ? "refundable"
        : "nonrefundable";
  }

  setValue(id: number): void {
    switch (id) {
      case 1:
        this.cancellationReason = "Wrong order";
        break;
      case 2:
        this.cancellationReason = "Change of plans";
        break;
      case 3:
        this.cancellationReason = "Other";
        break;
      default:
        this.cancellationReason = "Cancellation reason..";
        break;
    }
  }
}
