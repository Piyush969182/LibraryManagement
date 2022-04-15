import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  books: any[] = [
    {
      userId: '1',
      name: 'Piyush Soni',
      email: 'piyushsoni9691@gmail.com',
      mobile: '9691821850',
      gender: 'Male',
      dob: '10-07-2015',
      course: 'Btech',
      semester: '02',
      address: 'vijay Nagar',
      country: 'India',
      state: 'Madhya Pradesh',
      city: 'Indore',
    },
  ]
  constructor() { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    setTimeout(() => {
      $('#UserTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 2,
        processing: true,
        lengthMenu: [5, 10, 15]
      });
    }, 1);
  }
  DeleteUser(Id: number) {

  }
}
