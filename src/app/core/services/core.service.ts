import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  role: string | any = '';



  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decode: any = jwtDecode(encoded);
    console.log(decode);
    localStorage.setItem('userRole', decode.userGroup);
    localStorage.setItem('userName', decode.userName);
    this.getRole()
  }

  getRole() {
    if (localStorage.getItem('userToken') !== null && localStorage.getItem('userRole')) {
      this.role = localStorage.getItem('userRole');
    }
  }


  login(data: FormGroup): Observable<any> {
    return this._HttpClient.post('Users/Login', data)
  }

  register(data: FormData): Observable<any> {
    return this._HttpClient.post('Users/Register', data)
  }

  verify(data: FormGroup): Observable<any> {
    return this._HttpClient.put('Users/verify', data)
  }

}
