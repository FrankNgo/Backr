import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }

  addItem(newItem: Item) {
   this.items.push(newItem);
 }

  getItemById(itemId: number) {
    // for (var i = 0; i <= ITEMS.length - 1; i++) {
    //   if (ITEMS[i].id === itemId) {
    //     return ITEMS[i];
    //   }
    // }
  }
}
