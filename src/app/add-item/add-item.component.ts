import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [ItemService]
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, category: string, moneySoFar: number, daysLeft: number, itemImage: string) {
    var newItem: Item = new Item(title, description, category, moneySoFar, daysLeft, itemImage);
    this.itemService.addItem(newItem);
  }
}
