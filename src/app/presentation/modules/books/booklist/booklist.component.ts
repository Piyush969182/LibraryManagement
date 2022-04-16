import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books!: any
  constructor(private Books:BooksService) { }
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
    this.Books.getBooks().subscribe(response => {
      console.log(response)
      this.books=response;
    });
  }
  DeleteUser(Id: number) {

  }
}
