import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  constructor(private _CoreService:CoreService){}

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })


  onLogin(data:FormGroup){
    console.log(data);
    this._CoreService.login(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
