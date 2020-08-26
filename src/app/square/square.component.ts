import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value;
number;


  constructor() { 

    this.number=Math.floor(Math.random()*5);
    //this.value='X'
  }

  ngOnInit(): void {
  }

}
