import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books!: any
  shownotAvailable:boolean=false
  showAvailable:boolean=true
  image = './assets/book-icon.png'
  IsUser!:boolean;
  constructor(private BookService:BooksService,private userServices:UsersService) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
  
    this.BookService.getBooks().subscribe(response => {
      console.log(response)
      this.books=response;
      setTimeout(()=>{   
        $('#BookTable').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 2,
          processing: true,
          lengthMenu : [5, 10, 15]
      } );
      }, 1);
    //   this.books.forEach(function (this.books.value) {
    //     console.log(value);
    // });
  //   for (let item of this.books) {
  //     console.log(item.quantity)
  //     if (true) {
  //         return;
  //     }
  // }
  var loginType=this.userServices.getLoginType();
  if(loginType=='user')
  {
   this.IsUser=false;
  }
  else{
   this.IsUser=true;
  }
    });
  }
  DeleteBook(categoryId: number) {
    this.BookService.deletebook(categoryId).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }
}
