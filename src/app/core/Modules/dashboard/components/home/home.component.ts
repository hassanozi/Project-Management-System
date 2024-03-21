import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../service/current-user.service';
// import { CurrentUserService } from '../../../core/Modules/dashboard/service/current-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: any;
  country: string = '';
  creationDate: any;
  modificationDate: any;
  email: string = '';
  roleInSystem: string = '';
  imagePath: string = '';
  phoneNumber: number = 0;
  userName: string = '';
  completImage: string = 'https://upskilling-egypt.com/';
  notFoundRecipes: string = '../../../../assets/images/avatar.png';
  message: string = '';

  constructor(private _CurrentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this._CurrentUserService.currentUser().subscribe({
      next: (response) => {
        console.log(response)
        this.userData = response;
        this.userName = response.userName;
        this.country = response.country;
        this.roleInSystem = response.group.name;
        this.email = response.email;
        this.imagePath = response.imagePath;
        this.phoneNumber = response.phoneNumber;
        this.creationDate = response.creationDate;
        this.modificationDate = response.modificationDate;
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
