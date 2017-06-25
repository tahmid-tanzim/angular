import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('Kacchi Biryani',
      'A delicious and aromatic biryani.',
      'http://rupcare.com/wp-content/uploads/2016/09/rupcare_kacchi-biryani-recipe.jpg',
      [
        new Ingredient('Mutton', 5),
        new Ingredient('Basmati Rice', 10)
      ]),
    new Recipe('Pasta',
      'Pasta is a staple food of traditional Italian cuisine.',
      'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_51461826065.jpg',
      [
        new Ingredient('Tomato', 2)
      ]),
    new Recipe('Beef Steak',
      'Beefsteaks are usually grilled, pan-fried, or broiled.',
      'https://www.wish-bone.com/wp-content/uploads/2013/11/CaribbeanJerkBeefSteak.jpg',
      [
        new Ingredient('Beef', 9),
        new Ingredient('Salt', 7),
        new Ingredient('Pepper', 4)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
