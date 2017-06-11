import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') item: {name: string, description: string, imagePath: string};

  @Output('recipeSelected') itemSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(itemName: string) {
    this.itemSelected.emit(itemName);
  }
}
