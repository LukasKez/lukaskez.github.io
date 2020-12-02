import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-modal-content",
  template: `
    <div class="modal-header">
      <h5 class="modal-title text-center">Modal title</h5>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts. Separated they live in
      Bookmarksgrove right at the coast of the Semantics, a large language
      ocean. A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth. Even the all-powerful Pointing has
      no control about the blind texts it is an almost unorthographic life One
      day however a small line of blind text by the name of Lorem Ipsum decided
      to leave for the far World of Grammar.
    </div>
    <div class="modal-footer">
      <div class="d-flex flex-row justify-content-end">
        <button
          type="button"
          class="btn btn-outline-default btn-round"
          (click)="activeModal.close('Close click')"
        >
          Order
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-round"
          (click)="activeModal.close('Close click')"
        >
          Cancel
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.css"],
})
export class PlanetsComponent implements OnInit {
  showHeader = false;

  constructor(private modalService: NgbModal, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) =>
      url[0].path === "planets"
        ? (this.showHeader = true)
        : (this.showHeader = false)
    );
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "Planet";
  }
}
