import { Component } from '@angular/core';

import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery Manager';
  groceryList = [];
  search = null;
  modification = false;
  selectedItem = null;

  constructor(private data: DataService) {
    data.getGrosery()[0].complete();
    this.groceryList = data.getGrosery();
  }

  searchItem() {
    if (this.search.length < 1) {
      this.groceryList = this.data.getGrosery();
      return;
    }
    this.groceryList = this.data.getItemsByTitle(this.search);
  }

  chooseItem(item) {
    this.selectedItem = item;
    this.modification = true;
  }

  close() {
    this.selectedItem = null;
    this.modification = false;
  }
}
