import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders-index",
  templateUrl: "./orders-index.component.html",
  styleUrls: ["./orders-index.component.css"],
})
export class OrdersIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem("refundable");
  }

  redirect(id: number): void {
    const refundable = id % 2 === 0 ? "1" : "0";
    localStorage.setItem("refundable", refundable);
    this.router.navigateByUrl("/orders/cancel");
  }
}
