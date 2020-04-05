import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  isActive: boolean;
  onClick() {
    this.isActive = !this.isActive;
    }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
