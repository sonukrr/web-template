import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css']
})
export class DashContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   listCarddata = [
     {
       image: './assets/img/card-1.jpg',
       title: "Cozy 5 Stars Apartment",
       desc: " The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
       charges:899,
       location: "Barcelona, Spain"
     },

     {
      image: './assets/img/card-2.jpg',
      title: "Office Studio",
      desc: "The place is close to Metro Station and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the night life in London, UK.",
      charges:1.119,
      location: "London, UK"
    },

    {
      image: './assets/img/card-3.jpg',
      title: "Cozy 5 Stars Apartment",
      desc: " The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.",
      charges:459,
      location: "Milan, Italy"
    }
   ];



}
