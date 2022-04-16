import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/models/categories.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  // category!: Categories
  category!: any
  constructor(private categoryService: CategoriesService) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    setTimeout(() => {
      $('#CategoryTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 2,
        processing: true,
        lengthMenu: [5, 10, 15]
      });
    }, 1);
    console.log('category')
    this.categoryService.getCategory().subscribe(response => {
      console.log(response)
      this.category=response;
    });
  }
  DeleteUser(Id: number) {
  }
}
