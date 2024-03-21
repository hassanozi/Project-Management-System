import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from '../../services/core.service';
import { RegxPassword } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  message: string = '';


  hide = true;

  constructor(private _CoreService: CoreService, private _ToastrService: ToastrService, private _Router: Router) { }

  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
  })


  onRegister(data: FormGroup) {
    console.log(data);
    this._CoreService.register(data.value).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message;
      }, error: (error) => {
        this._ToastrService.error(error.error.message, 'Error ! ');
      }, complete: () => {
        // this._ToastrService.success(`Welcome Again`);
        // this._Router.navigate(['/core/dashboard'])
      },
    })
  }

}
