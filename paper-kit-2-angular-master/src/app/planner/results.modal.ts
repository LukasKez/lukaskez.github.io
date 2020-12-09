import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-modal-content",
  template: `
    <div class="modal-header">
      <h5 class="modal-title text-center">Travel to {{ name }}</h5>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h5><strong>Average temperature:</strong> 55 &#8451;</h5>
      <h5><strong>Current season:</strong> Summer</h5>
      <h5><strong>Time duration (from Earth):</strong> 35 hrs</h5>
      <h5>
        <strong>Number of available passenger:</strong> <br />
        2 adults + 2 childs
      </h5>
      <h5>
        <strong>Included services:</strong> <br />
        <span class="label label-info">Hotel</span> &nbsp;
        <span class="label label-danger">Catering</span>
        &nbsp;
        <span class="label label-default">Guide</span>
      </h5>
      <h5 class="mb-1"><strong>Description:</strong></h5>
      <p>
        Far far away, behind the red mountains, far from the countries Vokalia
        and Consonantia, there live the blind aliens. It is a paradisematic
        planet, in which roasted bugs fly into your mouth.
      </p>
    </div>
    <div class="modal-footer">
      <div class="d-flex flex-row justify-content-end">
        <button
          type="button"
          class="btn btn-outline-default btn-round"
          (click)="redirect()"
        >
          Order
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-round"
          (click)="activeModal.close()"
        >
          Cancel
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  redirect(): void {
    this.activeModal.close();
    this.router.navigate(["billing"]);
  }
}
