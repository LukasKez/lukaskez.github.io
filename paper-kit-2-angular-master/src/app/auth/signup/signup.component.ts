import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  @ViewChild("email") email: ElementRef;
  test: Date = new Date();
  focus;
  focus1;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  redirect(): void {
    const isAdmin = this.email.nativeElement.value.includes("admin")
      ? true
      : false;
    this.auth.register(isAdmin);
    this.router.navigateByUrl("");
  }
}
