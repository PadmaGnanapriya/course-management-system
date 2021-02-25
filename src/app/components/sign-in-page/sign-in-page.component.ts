import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  userEmail: string;
  userPassword: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  signIn = () => {
    if (this.userEmail.trim() === '' || this.userPassword.trim() === '') {
      return;
    }
    // alert(this.userEmail + ', ' + this.userPassword);

    this.router.navigateByUrl('/dashboard');
  };
}
