import {Component, Input} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  //strongly type assign Recipe class to recipe
  //use input so that orther component can use recipe
  @Input() recipe: Recipe;
  @Input() recipeId: number;

}
