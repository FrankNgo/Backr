import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})


export class FrontPageComponent {

  post = null;

  constructor(private router: Router){}

    items: Item[] = [
   new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1),
new Item("STRØM CITY. A Feature-Packed And Affordable e-Bike","Priced from $799. The ultimate CITY e-Bike from the bicycle capital of the world, Denmark. Save 60%!"
,"TRANSPORTATION", 124942,38,"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/atmvv97kmclpcwnrimeh.jpg",1)
  //  new Post("Giant Squid makes an appearance in Tokyo Bay", " RyanSmith",
  //      "r/TheDepthsBelow","https://b.thumbs.redditmedia.com/ydCkUxZoKvEVr1ns600xdd-NOvUWg_Pt8sFJCOg4ehE.jpg",32.5,2),
  //  new Post("The year I peaked (Circa 1992)", "heChadillac",
  //      "r/OldSchooCool","https://b.thumbs.redditmedia.com/kg40YhofqEDqO3dRhgyU8Jafkit8AHRUMFl8e4wR41Y.jpg",20.5,3),
  //  new Post("Kremlin Says Donald Trump Has Invited Vladimir Putin to the White House", "HockeyCannon",
  //      "r//worldnews","https://www.mycanceriq.ca/Content/images/HelpfulLinks_Banner.png", 9.1,4),
  //  new Post("When a building contracts a flesh eating disease ", "Every_form",
  //      "r/evilbuildings","https://b.thumbs.redditmedia.com/N0-zaT1rAm6jTRDwL52WuwyIXi0afwN_SQt7YPo3CYA.jpg",1.3,5),
  //  new Post("Programmers Keyboard Heatmap", "papperskassen",
  //      "r/ProgrammerHumor","https://b.thumbs.redditmedia.com/hwiNu8qP4UMmPN3snDnwWEBX_gzQ1QZCzfThfrp6ijs.jpg",.2,6)
  ];


  ngOnInit() {
  }

}
