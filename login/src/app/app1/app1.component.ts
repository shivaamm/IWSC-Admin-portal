import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  user:any;
id:any;
  constructor(private rs:UsersService,public router:ActivatedRoute) {
this.router.params.subscribe(params=>{
  this.id=params.id;
})
console.log(this.id);
   }

  ngOnInit(): void {
    this.rs.getusers1(this.id).subscribe
    (
      (response)=>
      {
        console.log("for one",response)
        this.user=response;
    }
     ),
     (error)=>console.log(error)
  }
approve(id:any){
  console.log("hello")
  this.rs.approve(id).subscribe((res)=>{
    console.log(res);
    alert("The event has been Approved")
  })
}  

reject(id:any){
  this.rs.approve(id).subscribe((res)=>{
    console.log(res);
  })
}
}
