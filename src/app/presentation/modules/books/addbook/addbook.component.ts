import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import { BooksService } from 'src/app/core/services/books.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { getYear } from 'date-fns';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  category!: any
  books!: FormGroup
  quantity: number = 1
  date = new Date();
  addSub!: boolean;
  options: DatepickerOptions = {
  //  minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()), // maximum available and selectable year
    placeholder: 'Please pick a date', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'LLLL do yyyy', // date format to display in input
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    //locale: locale, // date-fns locale
    position: 'bottom',
    inputClass: '', // custom input CSS class to be applied
    calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
   // keyboardEvents: true // enable keyboard events
  };
  constructor(private fb: FormBuilder, private router: Router, private bookService: BooksService, private categoryService: CategoriesService) {
    this.books = this.fb.group({
      // bookId:['',Validators.required],
      name: ['', [Validators.required,Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      categoryId: ['', Validators.required],
      authorName: ['', [Validators.required, Validators.minLength(3)]],
      publishDate: ['', [Validators.required]],
      edition: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(response => {
      console.log(response)
      this.category = response;
    });
  }
  addBook() {
    console.log(this.books.value);
    this.bookService.addBook(this.books.value).subscribe(s => {
      console.log(s)
      this.router.navigateByUrl('home/books/list');
    },
      err => {
        alert("Something Went Wrong");
      }
    );
  }
  get f() {
    return this.books.controls;
  }
  // ngOnChange(): void{
  //   this.addSubtractValue(this.addSub);
  // }
  addSubtractValue(addSub: boolean) {
    if (addSub) {
      this.quantity = this.quantity + 1;
      this.books.controls['quantity'].setValue(this.quantity);
    }
    else {
      if (this.quantity != 1) {
        this.quantity = this.quantity - 1;
        this.books.controls['quantity'].setValue(this.quantity);
      }
    }
  }
}


