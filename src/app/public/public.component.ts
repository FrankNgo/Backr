import { Component } from '@angular/core';
import * as firebase from "firebase";
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  providers: [AuthenticationService]
})
export class PublicComponent {

  public isLoggedIn: Boolean = null;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }
}
