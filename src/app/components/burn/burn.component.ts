import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-burn',
  templateUrl: './burn.component.html',
  styleUrls: ['./burn.component.scss']
})
export class BurnComponent implements OnInit {
  burn$: Observable<any> = of();
  // banners = [
  //   //{img:"assets/aditya/burn-banner-1.svg", url:""},
  //   //{img:"assets/aditya/burn-banner-2.svg", url:""},
  // ];

  burnCats$: Observable<any[]> = of();//[
  //{
  //  tit:"Accessories", img:"assets/aditya/accessories.webp", url:"/burn/accessories"
  //},

  // {tit:"Active Wear", img:"assets/aditya/activewear.webp", url:"/burn/activewear"},
  // {tit:"Beauty & wellness", img:"assets/aditya/beauty.webp", url:"/burn/beauty_and_wellness"},
  // {tit:"Electronics", img:"assets/aditya/electronics.webp", url:"/burn/electronics"},
  // {tit:"Food & Beverages", img:"assets/aditya/food.webp", url:"/burn/food_and_beverages"},
  //]

  curated$: Observable<any[]> = of();
  noCost$: Observable<any[]> = of();
  flashDeal$: Observable<any[]> = of();

  imgLoaded: string[] = [];

  balance = 0;
  burn: any = {
    banners: [{ img: "assets/roshan/burn-banner-1.svg" }, { img: "assets/roshan/burn-banner-2.svg" }]
  }

  cats: Array<any> = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1658853808624?alt=media&token=2ed70419-d7d4-46c2-9c10-c66d98cc29f2",
      tit: "Fashion and Accessories"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2Factive_wear1655376357925?alt=media&token=b932a78f-63ad-4ac6-8bd7-2031236efcd2",
      tit: "Active Wear"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1658853940789?alt=media&token=3fdda69b-fd56-41fe-b143-605553e691d9",
      tit: "Beauty and Wellness"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1658854064295?alt=media&token=534f7899-66e3-45f7-b7dd-54af245fdd7d",
      tit: "Electronics"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1658853745840?alt=media&token=df14ac05-dcf6-41e7-8a0c-4a2bd856e6d1",
      tit: "Food and Beverages"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1658853618028?alt=media&token=b5f234a9-66cc-4a2c-ad28-fe651ef93f16",
      tit: "Personal Care"
    }
  ];


  noCost:Array<any>=[{
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8u0IjMhoyi6iTpK4ezxz1658569731786?alt=media&token=e84ac953-af46-4a4c-8753-5a2ce6face4f",
    costBurn:90,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2trd5GLcti192YcNxSsX1658563569564?alt=media&token=dd9ca261-d639-4c3b-801b-ce789de4bc50",
    costBurn:113,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FN8HDxbpaRrrgnGILRk6U1658565270996?alt=media&token=71ad38e4-3a61-4cc7-b506-8306825f88d5",
    costBurn:113,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv9lWQR21AUtAc23EwwE1658574260929?alt=media&token=53a0eea5-b76c-47e4-9ae2-70a8ecb6da63",
    costBurn:134,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  }];

  curated:Array<any>=[{
    burnPic:"Mancode Beard Growth Oil, 50ml Exclusive"
  }]
  constructor(
    // private auth: AuthService
  ) {
    // this.execute();
  }

  ngOnInit(): void {
  }

  // execute() {
    // this.auth.user$.pipe(take(1)).subscribe(mine => {
    //   if( !mine ){
    //   }else{
    //     this.balance = mine.acBalC;
    //     this.burn$ = this.auth.getBurnHome();
    //     this.burnCats$ = this.auth.getBurnCats();
    //     this.curated$ = this.auth.getBurnProductHomeList(24);
    //     this.noCost$ = this.auth.getBurnProductListNoCost((this.balance), 4);
    //     this.flashDeal$ = this.auth.getBurnProductListCustom(4, "flash");
    //   }
    // })
  // }
}
