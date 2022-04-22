import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: any
  constructor(private userService:UsersService) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.users=response;
      setTimeout(() => {
        $('#UserTable').DataTable({
          pagingType: 'full_numbers',
          pageLength: 2,
          processing: true,
          lengthMenu: [5, 10, 15]
        });
      }, 25);
    });
  }
  DeleteUser(Id: number) {

  }
}
