import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "./results.modal";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.css"],
})
export class PlannerComponent implements OnInit {
  userOptions: number[] = [];
  packageNumber: number;
  alienBelief = 50;
  displayResults = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  pickRandomPackage(): void {
    if (!this.userOptions.length) {
      this.packageNumber = 0;
      this.displayResults = true;
      return;
    }

    this.packageNumber = this.userOptions[
      Math.floor(Math.random() * this.userOptions.length)
    ];

    this.displayResults = true;
  }

  updateUserOptions(preference: number) {
    this.userOptions.push(preference);
  }

  open(name: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = name;
  }
}
