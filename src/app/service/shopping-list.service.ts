import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.unshift(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
