import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'login';
}
// function validate()
// {
//   var x=document.forms["first"]["NAME"]
//   var y=document.forms["first"]["PASS"]
//   if (x.value==""&&x.value!="SrmIWSC2020")
//   {
//       window.alert("Please enter correct login name.");
//       x.focus();
//       return false;
//   }
//   if (y.value==""&&y.value!="IWSClogin@20")
//   {
//       window.alert(":(:( Wrong Password!!");
//       y.focus();
//       return false;
//   }
//   return true 
// }