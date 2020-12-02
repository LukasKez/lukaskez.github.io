import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(): void {
    document
      .getElementById("planets")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
