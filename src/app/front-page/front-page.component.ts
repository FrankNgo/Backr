import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ItemService]
})

export class FrontPageComponent implements OnInit {
   items: FirebaseListObservable<any[]>;
   constructor(private router: Router, private itemService: ItemService) {}
   ngOnInit(){
     this.items = this.itemService.getItems();
   }
  goToDetailPage(clickedItem: Item) {
    this.router.navigate(['items', clickedItem.id]);
  };
}
