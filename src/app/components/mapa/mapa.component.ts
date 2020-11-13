import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

	@Input() coords: string;
	@ViewChild('mapa', {static: true}) mapa: ElementRef;

  constructor() { }

  ngOnInit() {
  	//console.log(this.coords);
  	//console.log(this.mapa.nativeElement); 

  	const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

  	// para la apiKey de mapbox, debe registrarse y generarla, y luego sustituirla     
    mapboxgl.accessToken = 'tu_apiKey_de_mapbox';
	  const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      //container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
    });


	const marker = new mapboxgl.Marker()
        .setLngLat( [ lng, lat ] )
        .addTo( map );

  }

}
