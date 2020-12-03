import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("email") email: ElementRef;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  redirect(path?: string): void {
    const isAdmin = this.email.nativeElement.value.includes("admin")
      ? true
      : false;
    this.auth.login(isAdmin);
    this.router.navigate([path ? `/${path}` : "/"]);
  }
}
