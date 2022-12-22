import { UpperCasePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Table';
  userdata: any;
  userdatas: any;
  i: number = 1;
  e: any;
  filterdata: any;
  id: any;
  show:boolean=true;
  person: any;
  constructor(private users: TestService) {
    this.users.getdata(this.i).subscribe((res) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      console.log(this.userdatas);
    });
  }
  refresh(){
  location.reload();
  }
  next() {
    if (this.i >= this.userdata.total_pages) {
      this.i = 0;
    }
    this.i++;
    this.users.getdata(this.i).subscribe((res) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      // console.log(this.userdata);
    });
  }
  pre() {
    this.i--;
    // console.log(this.i);
    if (this.i == 0) {
      this.i = this.userdata.total_pages;
    }
    this.users.getdata(this.i).subscribe((res) => {
      this.userdata = res;
      this.userdatas = this.userdata.data;
      // console.log(this.userdata);
    });
  }
  getSearchVal(e: any) {
    // console.log(e.target.value);
    // console.log(this.userdatas)
    if (e.target.value !== '') {
      this.userdatas.forEach((ele: any) => {
        let eValue = e.target.value.toUpperCase();
        let fname = ele.first_name.toUpperCase();
        if (fname.startsWith(eValue)) {
          this.filterdata = ele;
          // console.log(this.filterdata.id)
          this.userdatas = [this.filterdata];
          // console.log("HHGFGFDSGFDGFC",this.userdata.data)
        }
      });
    } else {
      // console.log('not match');
      // console.log('USERDATAS', this.userdatas);
      this.userdatas = this.userdata.data;
    }
  }
  aTozSort() {
    var sorted = function compare(
      a: { first_name: any },
      b: { first_name: any }
    ) {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    };
    this.userdatas.sort(sorted);
    console.log(this.userdatas);
  }
  zToaSort(){
    var sorted= function compare(a: { first_name: any; },b: { first_name: any; }){
      if(b.first_name<a.first_name){
          return -1;
      }
      if(b.first_name>a.first_name){
          return 1;
      }
      return 0;
      }
      console.log(this.userdatas)
  this.userdatas.sort(sorted);
  }
  // id sorting
  forwardIdSort() {
    var sorted = function compare(
      a: { id: any },
      b: { id: any }
    ) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };
    this.userdatas.sort(sorted);
    console.log(this.userdatas);
  }
  reverseIdSort(){
    var sorted= function compare(a: { id: any; },b: { id: any; }){
      if(b.id<a.id){
          return -1;
      }
      if(b.id>a.id){
          return 1;
      }
      return 0;
      }
      console.log(this.userdatas)
  this.userdatas.sort(sorted);
  }
  viewuser(_person:any){
   this.show=false
   this.person=_person;
   console.log(this.person);
  }
  
}
