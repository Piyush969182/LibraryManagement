import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.scss']
})
export class BookReturnComponent implements OnInit {

  booksreturn!: FormGroup
  books!: any
  users: any
  constructor(private fb: FormBuilder, private router: Router, private BookService: BooksService, private userService: UsersService) {
    this.booksreturn = this.fb.group({
      // bookId:['',Validators.required],
      bookId: ['', Validators.required],
      userId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.BookService.getBooks().subscribe(response => {
      console.log(response)
      this.books = response;
    });
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.users = response;
    });
  }
  returnBook() {
    this.BookService.bookIssue(this.booksreturn.value).subscribe(s => {
      console.log(s)
      this.router.navigateByUrl('home/books/list');
    },
      err => {
        alert("Something Went Wrong");
      }
    );
  }
  get f() {
    return this.booksreturn.controls;
  }
}
