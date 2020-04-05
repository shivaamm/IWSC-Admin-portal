import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component implements OnInit {
  isActive: boolean;
  onClick() {
    this.isActive = !this.isActive;
    }
  constructor() { }

  ngOnInit() {
  }

}
