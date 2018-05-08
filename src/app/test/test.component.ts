import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  count: number = 1;

  ngDoCheck(){
    //console.log("Count Number",this.count);
  }

  //message : string = "my message";
}
