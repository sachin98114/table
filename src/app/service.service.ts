import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url= this.http.get('https://reqres.in/api/users?page');

  constructor(private http: HttpClient) { }
  getdata(count:any){
  return this.http.get('https://reqres.in/api/users?page='+count);
  
}
}
