import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {
  categories!: FormGroup
  categoryId!: number;
  details = {}
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private categoryService: CategoriesService) {
    this.categories = this.fb.group({
      categoryId: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.categoryService.getDataById(this.categoryId).subscribe(response => {
      console.log(response);
      this.details = response;
      this.categories.patchValue(this.details);
    });
  }
  editCategory() {
    console.log(this.categories.value);
    this.categoryService.updateCategory(this.categories.value).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('home/categories/list');
    });
  }
  get f() {
    return this.categories.controls;
  }
}
