import { Component, OnInit } from '@angular/core';
// import { GoogleMap } from '@angular/google-maps';

declare var google: any;


@Component({
  selector: 'app-distancecalculator',
  templateUrl: './distancecalculator.component.html',
  styleUrls: ['./distancecalculator.component.scss']
})
export class DistancecalculatorComponent implements OnInit {
  // @ViewChild(GoogleMap) Gmap!: GoogleMap;

  constructor() {
    // this.calculatedistance();
  }

  ngOnInit(): void {
    // this.loadMap();
  }

  loadMap() {
    const cairo = { lat: 19.446735, lng: 72.801681 };
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        scaleControl: true,
        center: cairo,
        zoom: 17,
      }
    );
    const infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({ map, position: cairo });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    var firstmmaker = new google.maps.LatLng({lat:20.68766, lng: 56.67865});
    console.log("1");
    var secondmaker = new google.maps.LatLng({lat:46.68766, lng: 37.67865});
    console.log("2");
    // const distance = firstmmaker.getGeometry().distance(secondmaker.getGeometry());
    const distance = google.maps.geometry.spherical.computeDistanceBetween(firstmmaker,secondmaker);
    console.log("3");

    console.log("distance" + distance);

  }

  // calculatedistance() {
  
  // }
  // calcDistance(){
  
  //   const distance1 = google.maps.geometry.spherical.computeDistanceBetween()

  // }
}
