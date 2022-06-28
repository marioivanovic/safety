import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})

export class PageSignInComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    console.log('Composant PageSignIn instancié');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control("", Validators.required),
      password: this.formBuilder.control("", Validators.required)
    });
  }

  submitForm() {
    const formValues = this.loginForm.value;
    this.authService.login(formValues)
    .subscribe((response: any) => {
        console.log('User successfully logged in!', response);
        console.log(response);
        this.router.navigate(['/account']);
      });
  }

}
