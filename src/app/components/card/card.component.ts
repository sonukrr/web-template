import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,AfterViewInit {

  @Input()
  cardTitle;

  @Input()
  submitButtonText;

  @Input()
  isRegister=false;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    if(this.isRegister){
      document.getElementById("sub-card").classList.remove("inner_card");
      
    }
  }

}
