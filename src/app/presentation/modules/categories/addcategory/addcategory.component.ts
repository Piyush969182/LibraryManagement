import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  categories!: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private categoryService: CategoriesService) {
    this.categories = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  addCategory() {
    console.log(this.categories.value);
    this.categoryService.addCategory(this.categories.value).subscribe(s => {
      console.log(s)
      this.router.navigateByUrl('home/categories/list');
    },
      err => {
        alert("Something Went Wrong");
      }
    );

  }
  get f() {
    return this.categories.controls;
  }
}
