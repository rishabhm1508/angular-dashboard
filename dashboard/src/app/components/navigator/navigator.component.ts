import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarOpenAnimation } from 'src/app/animations';

const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease"
};

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})

export class NavigatorComponent implements OnInit {
  isOpen = false;
  navigationMenus = ['Second Route', 'Third Route'];

  constructor(private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToRoute(navigateType:string):void{
    if(navigateType)
    navigateType ==='Second Route'?this.router.navigate(['example-json-table'],{relativeTo:this.activeRoute}):
    this.router.navigate(['style-div'],{relativeTo:this.activeRoute})
    
  }

}
