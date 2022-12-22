import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
@Input () userdata:any;
@Output () show= new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.userdata)
  }
  Back(){
    this.show.emit();

  }

}
