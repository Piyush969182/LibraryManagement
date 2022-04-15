import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
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
  books!:FormGroup
  quantity :number = 1
  date = new Date();
  constructor(private fb:FormBuilder,private router:Router) { 
    this.books=this.fb.group({
      bookId:['',Validators.required],
      name:['',Validators.required],
      description:['',[Validators.required, Validators.minLength(10)]],
      category:['',Validators.required],
      authorName:['',Validators.required],
      publishDate:['',Validators.required],
      edition:['',Validators.required],
      quantity:[this.quantity,Validators.required],
      image:['',Validators.required],
    });
 
  }
  // options: DatepickerOptions = {
  //   minYear: getYear(new Date()) - 30, // minimum available and selectable year
  //   maxYear: getYear(new Date()) + 30, // maximum available and selectable year
  //   placeholder: '', // placeholder in case date model is null | undefined, example: 'Please pick a date'
  //   format: 'LLLL do yyyy', // date format to display in input
  //   formatTitle: 'LLLL yyyy',
  //   formatDays: 'EEEEE',
  //   firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  //   locale: locale, // date-fns locale
  //   position: 'bottom',
  //   inputClass: '', // custom input CSS class to be applied
  //   calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
  //   scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
  //   keyboardEvents: true // enable keyboard events
  // };
  ngOnInit(): void {
  }
  addBook(){
    console.log(this.books.value);
    this.router.navigateByUrl('home/books/list');
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


