import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burn-cat',
  templateUrl: './burn-cat.component.html',
  styleUrls: ['./burn-cat.component.scss']
})
export class BurnCatComponent implements OnInit {
  title: string = "Electronics";
  // cat = {
  banners: Array<any> = [{
    img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655377252521?alt=media&token=6203568a-8662-478e-8665-4def671914b9",
    url: "",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376393248?alt=media&token=e20c1142-c8dd-401c-8e6d-c0da0fbe7451",
    url: "",
  }
  ];
  newIN: Array<any> = [{
    img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655377252521?alt=media&token=6203568a-8662-478e-8665-4def671914b9",
    url: "",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376393248?alt=media&token=e20c1142-c8dd-401c-8e6d-c0da0fbe7451",
    url: "",
  }
  ];
  spot:Array<any> =[{
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  },
  {
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  },
  {
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  },
  {
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  },
  {
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  },
  {
    img:"https://firebasestorage.googleapis.com/v0/b/refr/o/burn%2F1655376468841?alt=media&token=e8bd2a5a-4719-403c-9702-1049338fca45",
    url:""
  }]


  curated:Array<any>=[{
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8u0IjMhoyi6iTpK4ezxz1658569731786?alt=media&token=e84ac953-af46-4a4c-8753-5a2ce6face4f",
    title:"This is title",
    cost:90,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F2trd5GLcti192YcNxSsX1658563569564?alt=media&token=dd9ca261-d639-4c3b-801b-ce789de4bc50",
    title:"This is title",
    cost:113,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FN8HDxbpaRrrgnGILRk6U1658565270996?alt=media&token=71ad38e4-3a61-4cc7-b506-8306825f88d5",
    title:"This is title",
    cost:113,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  },
  {
    burnPic:"https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv9lWQR21AUtAc23EwwE1658574260929?alt=media&token=53a0eea5-b76c-47e4-9ae2-70a8ecb6da63",
    title:"This is title",
    cost:134,
    price:499,
    burnAbout:"Mancode Beard Growth Oil, 50ml Exclusive"
  }];
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
