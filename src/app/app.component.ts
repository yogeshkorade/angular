import { Component, Inject, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TestComponent } from './test/test.component';
import { WebService } from './services/web.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(TestComponent) child;
  message:string;
  title = 'app';
  currentstep : number = 5;

  constructor(private webservice: WebService){
    this.webservice.getFromServer('http://jsonplaceholder.typicode.com/users').subscribe(Response => {
        //alert(Response[0]['name']);
    })
  }

  ngAfterViewInit() {
      this.message = this.child.message;
      //console.log("Message",this.message);
  }
  
}
