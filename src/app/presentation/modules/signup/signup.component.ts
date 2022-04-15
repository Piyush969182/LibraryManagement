import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register!: FormGroup
  constructor(private fb: FormBuilder,private router:Router) {
    this.register = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(3)]],
      lastName: ['', [Validators.required,Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')]],
      mobile: ['', [Validators.required]],
      brance: ['', [Validators.required,Validators.minLength(3)]],
      semester: ['', [Validators.required]],
      address: ['', [Validators.required,Validators.minLength(8)]],
      country: ['', [Validators.required,Validators.minLength(3)]],
      state: ['', [Validators.required,Validators.minLength(3)]],
      city: ['', [Validators.required,Validators.minLength(3)]],

    })
   }
  ngOnInit(): void {
  }
  Register(){
    console.log(this.register.value)
    this.router.navigateByUrl('home');
  }
  get f(){
    return this.register.controls
  }
}
