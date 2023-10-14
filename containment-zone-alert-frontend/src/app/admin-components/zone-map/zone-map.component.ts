import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map, tileLayer, marker, LatLngExpression, Icon, icon } from 'leaflet';
import axios from 'axios';

@Component({
  selector: 'app-zone-map',
  templateUrl: './zone-map.component.html',
  styleUrls: ['./zone-map.component.css']
})
export class ZoneMapComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef | undefined;
  locationData: any[] = [];
  map: Map | undefined;
  searchQuery: string = '';
  customIcon: Icon = icon({
    iconUrl: '../../assets/images/placeholder_684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/details/retrieve").subscribe((resultData: any) => {
      this.locationData = resultData.data;
      this.showAddressesOnMap();
    });
  }

  async showAddressesOnMap() {
    this.map = new Map(this.mapElement?.nativeElement).setView([0, 0], 2);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    for (const data of this.locationData) {
      this.addMarkerForLocation(data.address);
    }
  }

  private async addMarkerForLocation(address: string) {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: address,
          key: '5b62e253be0f485892ab3b518768e233',
        }
      });

      if (response.data.results.length > 0) {
        const coordinates = response.data.results[0].geometry;
        this.addMarkerWithPopup(coordinates.lat, coordinates.lng, address);
      } else {
        console.error(`Geocoding failed for address: ${address}`);
        console.error("OpenCage Geocoding API Response:", response.data);
      }
    } catch (error) {
      console.error(`Geocoding error for address: ${address}`, error);
    }
  }

  private addMarkerWithPopup(latitude: number, longitude: number, address: string) {
    marker([latitude, longitude], { icon: this.customIcon })
      .addTo(this.map as Map)
      .bindPopup(address)
      .openPopup();
  }

  searchLocation(query: string) {
    if (!this.map) {
      console.error("Map is not initialized.");
      return;
    }

    const filteredLocations = this.locationData.filter(data => data.address.toLowerCase().includes(query.toLowerCase()));

    this.map.eachLayer(layer => {
      if (layer instanceof marker) {
        this.map?.removeLayer(layer);
      }
    });

    for (const data of filteredLocations) {
      this.addMarkerForLocation(data.address);
    }
  }

  centerMap(latitude: number, longitude: number) {
    if (!this.map) {
      console.error("Map is not initialized.");
      return;
    }

    this.map.setView([latitude, longitude], 10);
  }
}
