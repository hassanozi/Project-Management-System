import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../../services/core.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  message: string = '';


  hide = true;

  constructor(private _CoreService: CoreService, private _ToastrService: ToastrService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
  })


  onLogin(data: FormGroup) {
    console.log(data);
    this._CoreService.login(data.value).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message;
        localStorage.setItem('userToken', response.token);
        this._CoreService.getProfile();
      }, error: (error) => {
        this._ToastrService.error(error.error.message, 'Error ! ');
      }, complete: () => {
        this._ToastrService.success(`Welcome Again`);
        this._Router.navigate(['/core/dashboard'])
      },
    })
  }
}
