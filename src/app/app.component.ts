import { Component } from '@angular/core';

import { DataService } from '../services/data/data.service';

import { item } from '../models/item.model';

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
  selectedItemIndex = null;
  addnew = false;
  newItem = new item(null, null, null, false);

  constructor(private data: DataService) {
    //initialize the grocery list
    this.groceryList = data.getGrosery();
  }
  //search items by item title
  searchItem() {
    if (this.search.length < 1) {
      this.groceryList = this.data.getGrosery();
      return;
    }
    this.groceryList = this.data.getItemsByTitle(this.search);
  }
  //click event for each list element
  chooseItem(title: string) {
    this.modification = true;
    this.selectedItem = this.data.getItemByTitle(title);
    this.selectedItemIndex = this.data.getItemIndexByTitle(title);
  }
  //close modification panel
  close() {
    this.modification = false;
  }
  //close add new panel
  closeNew() {
    this.addnew = false;
  }
  //delete selected item
  deleteItem() {

  }
  //update item information
  updateItem() {
    this.data.updateItem(this.selectedItem, this.selectedItemIndex);
    alert('success');
  }
  //open add new item panel
  openNewItemPanel() {
    this.addnew = true;
  }
  //add new item
  addNewItem() {
    this.data.addNew(this.newItem);
    alert('success');
    this.newItem = new item(null, null, null, false);;
  }
}
