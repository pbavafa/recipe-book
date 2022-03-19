import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test disc', 'https://www.maxpixel.net/static/photo/1x/Table-Cake-Fork-Plate-Food-Cover-Eat-Cutlery-661464.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
