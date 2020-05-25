import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url:string="https://iwsc-admin-portal-api.herokuapp.com";

  getusers()
  {
   return this.http.get(this.url)
  }
  getusers1(id:any)
  {
    return this.http.get(this.url+'/one'+"?id="+id)
  }
  approve(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/approve',body);
  }
  disapprove(id:any){
    let body={
      id:id
    }
    return this.http.post(this.url+'/disapprove',body);
  }
}