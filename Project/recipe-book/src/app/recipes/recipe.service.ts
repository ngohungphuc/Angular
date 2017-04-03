import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dumny', 'http://simpleproductphotography.com/wp-content/uploads/2016/06/huf-converse-product-red-skidgrip-1.jpg', [
      new Ingredient('French fries', 2),
      new Ingredient('Pork meat', 1)
    ]),
    new Recipe('Summer salad', 'okayfish', 'https://www.eukicks.com/wp-content/uploads/2009/11/2.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
