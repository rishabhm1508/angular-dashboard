import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  navigator=false;

  constructor(private router:Router){}

  navigate(){
    this.navigator = true;
    this.router.navigateByUrl('/navigator');
  }
}
