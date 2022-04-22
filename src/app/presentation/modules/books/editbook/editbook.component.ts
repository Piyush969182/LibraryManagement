import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import { BooksService } from 'src/app/core/services/books.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { getYear } from 'date-fns';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {
  category!: any
  books!:FormGroup
  quantity :number = 1
  date = new Date('05 October 2011 14:48 UTC');
  bookId!: number; 
  details = {};
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
  constructor(private fb:FormBuilder,private router:Router,private route: ActivatedRoute, private bookService:BooksService,private categoryService: CategoriesService) { 
    this.books=this.fb.group({
      bookId:['',Validators.required],
      name:['',Validators.required],
      description:['',[Validators.required, Validators.minLength(10)]],
      categoryId:['0',Validators.required],
      authorName:['',Validators.required],
      publishDate:['',Validators.required],
      edition:['',Validators.required],
      quantity:[5,Validators.required],
      image:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('bookId'));
  this.getCategories();

  }
  getBookDetails(){
    this.bookService.getBookById(this.bookId).subscribe(response => {
      console.log(response);
      this.details = response;
      this.books.patchValue(this.details);
      console.log("patch value"+this.books.value)
    });
  }
  getCategories(){
    this.categoryService.getCategory().subscribe(response => {
      console.log(response)
      this.category=response;
      this.getBookDetails();
    });
  }
  editBook(){
    console.log(this.books.value);
    this.bookService.updateBook(this.books.value).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('home/books/list');
    });
  }
  get f(){
    return this.books.controls;
  }
  addSubtractValue(addSub :boolean){
    if(addSub)
    {
      this.quantity = this.quantity + 1
    }
    else{
      this.quantity = this.quantity - 1
    }
  }
}
