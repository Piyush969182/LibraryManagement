import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/models/categories.model';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  // category!: Categories
  category!: any
  IsUser!:boolean;
  constructor(private categoryService: CategoriesService,private userService:UsersService) { }
  dtOptions: DataTables.Settings = {};
  image = './assets/adventure-action-game.png'
  ngOnInit(): void {
    console.log('category')
    this.categoryService.getCategory().subscribe(response => {
      console.log(response)
      this.category = response;
      setTimeout(() => {
        $('#CategoryTable').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 15]
        });
      }, 25);
    });
    var loginType=this.userService.getLoginType();
    console.log(loginType)
    if(loginType=='user')
    {
     this.IsUser=false;
    }
    else{
     this.IsUser=true;
    }
  }
  DeleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }
}
