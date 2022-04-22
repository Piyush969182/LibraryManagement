import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register!: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) {
    this.register = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      mobile: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      branch: ['', [Validators.required, Validators.minLength(3)]],
      semester: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(8)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      role: ['user']
    })
  }
  ngOnInit(): void {
  }
  Register() {
    console.log(this.register.value)
    this.userService.signUp(this.register.value).subscribe(s => {
      console.log(s)
      this.router.navigateByUrl('home');
    },
      err => {
        alert("Registration failed");
      }
    );

  }
  get f() {
    return this.register.controls
  }
}
