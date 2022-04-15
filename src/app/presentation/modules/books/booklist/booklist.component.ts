import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  books: any[]=[
    {
      bookId:'1',
      name:'The Guns of August',
      image:'',
      category:'Historic',
      authorName:'',
      publishDate:'10-07-2015',
      edition:'2020',
      bookIssued:'02',
      quantity:'05',
    },
    {
      bookId:'2',
      name:'The Crusades',
      image:'',
      category:'Historic',
      authorName:'',
      publishDate:'10-07-2015',
      edition:'2020',
      bookIssued:'02',
      quantity:'05',
    },
    {
      bookId:'3',
      name:'Revolutions ',
      image:'',
      category:'Historic',
      authorName:'',
      publishDate:'10-07-2015',
      edition:'2020',
      bookIssued:'06',
      quantity:'10',
    },
  ]
  constructor() { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    setTimeout(()=>{   
      $('#BookTable').DataTable( {
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
