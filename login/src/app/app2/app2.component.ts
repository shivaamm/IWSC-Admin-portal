import { Component, OnInit, ElementRef, Renderer2, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UsersService } from '../users.service';
import { users } from '../users';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App2Component implements OnInit, OnDestroy {
constructor( private rs:UsersService ) {}
// users:users[]=[];
details:any=['Name','Date','Venue']
index:any=['name','date','venue']
users:any;
x:any=['0','1']
y:any;
ngOnInit():void {
     this.rs.getusers().subscribe
     (
       (response)=>
       {
         console.log(response)
         this.users=response;
         console.log(response[0]['name'])
        //  for(this.x=0;this.x<users.length;this.x+1)
        //  {
        //   this.y=this.x;
        //   console.log(this.y)
        //  }
       },
       (error)=>console.log(error)
       
     )
}
  ngOnDestroy() {
    // remove the class form body tag
     
  }
  
}