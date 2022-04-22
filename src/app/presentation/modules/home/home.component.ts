import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  IsUser!:boolean;
 
  constructor(private router:Router, private userService:UsersService) { }

  ngOnInit(): void {
     var loginType=this.userService.getLoginType();
     console.log(loginType)
     if(loginType=='user')
     {
      this.IsUser=false;
     }
     else{
      this.IsUser=true;
     }
  }
  Logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('login')
  }
}
