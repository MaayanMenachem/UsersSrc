import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User 
{
  id : number;
  name: string;
  last_name: string;
  username :string;
  email :string;
  phone :string;
  website :string;
  address : Address;
  geo : Geo;
  Company :Company;
};

export interface Address 
{
       street : string;
       suit : string;
       city : string;
       zipcode : string;
};

export interface Geo 
{
         lat : string;
         lng : string;
       
};

export interface Company 
{
      name : string;
      catchPhrase : string;
      bs : string;
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl ='http://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) {}
 
  GetUsers(): any
  {
   return this.http.get<User>(this.userUrl, {observe : 'response' });
  }
}
