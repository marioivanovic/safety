import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: this.formBuilder.control("", Validators.required),
      password: this.formBuilder.control("", Validators.required)
    });
  }

  submitForm() {
    const formValues = this.registerForm.value;
    this.authService.register(formValues)
    .subscribe((response) => {
        console.log('Account successfully created!');
        console.log(response);
        this.router.navigate(['/sign-in']);
    });
  }

}


