import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dumny', 'https://avatars1.githubusercontent.com/u/13591213?v=3&s=460');

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
