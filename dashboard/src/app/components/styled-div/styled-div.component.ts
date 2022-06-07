import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styled-div',
  templateUrl: './styled-div.component.html',
  styleUrls: ['./styled-div.component.scss']
})
export class StyledDivComponent implements OnInit {
  borderColor: string = 'black';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(event: any) {
    this.borderColor = event.target.value !==''?event.target.value:'black';
  }

}
