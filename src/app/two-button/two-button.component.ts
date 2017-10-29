import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
  @Input() positiveBtnText: string;
  @Input() negativeBtnText: string;
  
  constructor() {
  }

  clickPositive(): void {
    //this.positiveFunction();
  }
  clickNegative(): void {
    //this.negativeFunction();
  }

  ngOnInit() {

  }
}
