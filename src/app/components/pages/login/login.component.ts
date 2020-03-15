import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit,OnDestroy {

  constructor() { 
    
  }


  ngOnInit() {

  }


  ngAfterViewInit(): void {
    document.getElementsByClassName('background-image')[0].classList.add('background-image__loginpage');
  }

  ngOnDestroy(): void {
    document.getElementsByClassName('background-image')[0].classList.remove('background-image__loginpage');

  }

}
