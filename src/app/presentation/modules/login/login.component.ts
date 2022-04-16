import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup
  response: any;
  constructor(private fb: FormBuilder, private router: Router,private userService:UsersService) {
    this.login = this.fb.group({
      email: ['', [Validators.required,,Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  Login() {
    console.log(this.login.value)
    this.userService.login(this.login.value).subscribe(s => {
      console.log(s)
      this.response = s
      localStorage.setItem('token', this.response.token);
      this.router.navigateByUrl('home/dashboard');
    },
      err => {
        alert("Login failed");
        this.login.reset();
      }
    );
   
  }
  get f() {
    return this.login.controls;
  }
}
