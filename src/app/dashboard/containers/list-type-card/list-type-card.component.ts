import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-type-card',
  templateUrl: './list-type-card.component.html',
  styleUrls: ['./list-type-card.component.scss']
})
export class ListTypeCardComponent implements OnInit {

  @Input()
  data;

  @Input()
  isLastCard = false;
  
  @Input()
  isSecondCard = false;

  constructor() { }

  ngOnInit() {

  }

}
