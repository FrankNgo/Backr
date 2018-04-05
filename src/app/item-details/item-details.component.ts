import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { ItemService } from '../item.service';



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [ItemService]
})

export class ItemDetailsComponent implements OnInit {
    itemId: number = null;
    itemToDisplay: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) {}


  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //   this.itemId = parseInt(urlParameters['id']);
    // });
    // this.itemToDisplay = this.itemService.getItemById(this.itemId);
  }

}
