import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dumny', 'https://avatars1.githubusercontent.com/u/13591213?v=3&s=460');

  constructor() {
  }

  ngOnInit() {
  }

}
