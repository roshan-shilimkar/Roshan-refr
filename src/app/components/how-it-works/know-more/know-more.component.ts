import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {
  id?: number;
  constructor(private actRoute: ActivatedRoute) {
    const aR = this.actRoute.snapshot.params;
    this.id = aR["id"] || null;
    console.log("id", this.id)
  }

  ngOnInit(): void {
  }

}
