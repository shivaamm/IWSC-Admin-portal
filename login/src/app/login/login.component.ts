import { Component, OnInit, ViewEncapsulation, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
username:any;
password:any;
  constructor(public router:Router, @Inject(DOCUMENT) private _document ) { }

  ngOnInit(): void {}
     
  ngOnDestroy() {
    // remove the class form body tag
     
  }
next(){
  console.log(this.username,this.password);
  if(this.username=="grapido"&&this.password=="grapido"){
this.router.navigate(['/events']);
  }
  else{
    alert("Please provide correct username and password")
  }
}
}
