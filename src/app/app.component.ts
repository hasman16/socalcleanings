import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1><span style="color:red;font-size:46px;font-weight:bolder">Site under construction. <br><br><br>Please check back later.</span><br><br><img src="./app/images/cleaning.gif" class="img-fluid img-responsive" width="auto" alt="Clean Clean Clean">`,
})
export class AppComponent  { name = 'SoCal Cleanings'; }
