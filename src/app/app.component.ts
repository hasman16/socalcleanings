import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1><span style="color:red;font-size:46px;font-weight:bolder">Site under construction. <br><br><br>Please check back later.</span>`,
})
export class AppComponent  { name = 'SoCal Cleanings'; }
