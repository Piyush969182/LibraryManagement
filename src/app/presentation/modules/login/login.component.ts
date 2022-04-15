import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      email: ['', [Validators.required,,Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  Login() {
    console.log(this.login.value)
    this.router.navigateByUrl('home/dashboard');
  }
  get f() {
    return this.login.controls;
  }
}
