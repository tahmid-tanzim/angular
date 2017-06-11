import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input('recipe') recipeName: string;

  constructor() {
  }

  ngOnInit() {
    this.recipeName = 'Recipe Name';
  }

  ngOnChanges(changes) {
    console.log('Changed', changes.recipeName.currentValue, changes.recipeName.previousValue);
  }

}
