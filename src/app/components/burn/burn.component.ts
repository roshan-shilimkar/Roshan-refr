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
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2Ffashion_and_accessories1657891491004?alt=media&token=368fd9cf-14f6-4e2a-9f96-09ebc0474e6e",
      tit: "Fashion and Accessories"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2Factive_wear1655376357925?alt=media&token=b932a78f-63ad-4ac6-8bd7-2031236efcd2",
      tit: "Active Wear"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655457945725?alt=media&token=83ab5606-e5fa-4607-88cf-327b880f39a0",
      tit: "Beauty and Wellness"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2Felectronics1655377187933?alt=media&token=607291d0-4288-477e-ada8-8d7f7fc24952",
      tit: "Electronics"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655458198511?alt=media&token=df0143af-f51e-4c0c-b38e-8c6e7ac02af5",
      tit: "Food and Beverages"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655457945725?alt=media&token=83ab5606-e5fa-4607-88cf-327b880f39a0",
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
