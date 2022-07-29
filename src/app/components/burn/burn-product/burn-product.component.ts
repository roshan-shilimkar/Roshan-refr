import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burn-product',
  templateUrl: './burn-product.component.html',
  styleUrls: ['./burn-product.component.scss']
})
export class BurnProductComponent implements OnInit {
  product = {
    id: "",
    burnPics: ["https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLjJLDOJqsdngIdIQaKq51657880079099?alt=media&token=47c68557-cf45-4d53-841d-e5d0bf199d6c","https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLjJLDOJqsdngIdIQaKq51657880079099?alt=media&token=47c68557-cf45-4d53-841d-e5d0bf199d6c"],
    cost: "299",
    title: "Orange & Mint Tea",
    storeINFO: {
      logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FQ6lhbumEYeG9xiQgLfqyLOGO1655971598990?alt=media&token=2adf318c-b2da-40d7-b9bc-7c35173bdb8c",
      name: "The Earth Reserve",
      about: "The Earth Reserve is a premium collection of artisanal, homemade and handmade products that are all natural, traditionally inspired and wholesome. The entire homemade foods and organic spices collection is free of artificial colours, artificial flavours, artificial fragrances, synthetic preservatives and flavour enhancers. Free of chemical additives.",
    },
    burnHigh: "Hydrates well & No Skin Drying.pH 5.5 for the care of your skin.Suits all skin types.",
    burnSpec: "Food / Non-Food/category: Food Dry / Chilled / Frozen: Dry Contains Dairy: No Organic: No Gluten-Free: Yes Nuts: No Artisan: Yes  Allergy Warning: No Storage Instruction: Keep it in a cool & dry place. Product Weight: 50 gm Normalized weight: 235 gm Pack Type: Glass bottle Multi Pack: No Shelf Life: 18 months L*B*H: 5*5*12 Volumetric weight after packing: 0.6916  Ideal Box Type: 18*13*8 Name of the country of origin/ manufacture/ assembly for imported product: India FSSAI Number: 21218110000021",
    burnDec: "Rich in vitamin C that boosts immunity. Orange peels exert anti-obesity properties as it suppresses adipose tissue (fat) formation. Rich in antioxidants, it helps the body fight oxidative stress Nutritional Facts: Approximate values per 2 grams Energy- 6.94 kcal, Carbohydrate- 1.42 gm, Total Protein 0.27 gm, Total Fat 0.02 gm, Sugar nil Ingredients / Composition: Green tea, orange peels, mint leaves",
  }
  prodQty: number = 1;
  makingChanges = false;

  mine: any = {
    acBalC: 0,
  }
  constructor(private actRoute: ActivatedRoute) { 
    const r = this.actRoute.snapshot.params;
    const what = r["noCost"] ? "noCost" : "" + r["flashSale"] ? "flashSale": "";
    console.log("title"+what)
  }

  ngOnInit(): void {
  }

  Addminus(i: number) {
    if (i == 0) {
      if (this.prodQty != 1) {
        this.prodQty--;
      }
    }
    else {
      this.prodQty++;
    }
  }

}
