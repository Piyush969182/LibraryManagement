import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  category: any[]=[
    {
      id:'1',
      name:'Historic',
      image:''
    },
    {
      id:'2',
      name:'Comic',
      image:''
    },
    {
      id:'3',
      name:'Poetry',
      image:''
    }
  ]
  constructor() { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    setTimeout(()=>{   
      $('#CategoryTable').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 2,
        processing: true,
        lengthMenu : [5, 10, 15]
    } );
    }, 1);
  }
  DeleteUser(Id: number) {

  }
}
