import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.scss']
})
export class BookIssueComponent implements OnInit {
  booksissue!: FormGroup
  books!: any
  users: any
  isBookReturn:boolean=true
  constructor(private fb: FormBuilder, private router: Router, private BookService: BooksService, private userService: UsersService) {
    this.booksissue = this.fb.group({
      // bookId:['',Validators.required],
      bookId: ['', Validators.required],
      userId: ['', [Validators.required]],
      isBookReturn:[true]
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
  issueBook() {
    console.log('book is is'+this.booksissue.value.bookId);
    this.BookService.bookIssue(this.booksissue.value).subscribe(s => {
      console.log(s)
      this.router.navigateByUrl('home/books/list');
    },
      err => {
        alert("Something Went Wrong");
      }
    );
  }
  get f() {
    return this.booksissue.controls;
  }
}
