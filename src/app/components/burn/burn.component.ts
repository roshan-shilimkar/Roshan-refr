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
  ]
  constructor(
    // private auth: AuthService
  ) {
    this.execute();
  }

  ngOnInit(): void {
  }

  execute() {
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
  }
}
