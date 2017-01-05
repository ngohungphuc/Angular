import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  //strongly type assign Recipe class to recipe
  //use input so that orther component can use recipe
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
