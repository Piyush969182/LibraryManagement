import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {
  categories!: FormGroup
  id!: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.categories = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      image: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  editCategory() {
    console.log(this.categories.value);
    this.router.navigateByUrl('home/categories/list');
  }
  get f() {
    return this.categories.controls;
  }
}
