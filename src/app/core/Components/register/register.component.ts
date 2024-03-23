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
  files: File[] = [];
  hide = true;
  profileImgValue: any
  constructor(private _CoreService: CoreService, private _ToastrService: ToastrService, private _Router: Router) { }

  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),

  })


  onRegister(data: FormGroup) {
    let registerFormData = new FormData()
    registerFormData.append('profileImage', this.profileImgValue)
    registerFormData.append('userName', data.value.userName)
    registerFormData.append('email', data.value.email)
    registerFormData.append('phoneNumber', data.value.phoneNumber)
    registerFormData.append('password', data.value.password)
    registerFormData.append('confirmPassword', data.value.confirmPassword)
    registerFormData.append('country', data.value.country)
    console.log(data.value);

    console.log(registerFormData);
    this._CoreService.register(registerFormData).subscribe({
      next: (response) => {
        console.log(response);

        this._ToastrService.success(response.message);
      }, error: (error) => {
        this._ToastrService.error(error.error.message, 'Error ! ');
        console.log(error);

      }, complete: () => {
        this._Router.navigate(['/core/dashboard'])
      },
    })
  }



  onSelect(event: any) {
    console.log(event.addedFiles[0]);
    this.profileImgValue = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);

    console.log(this.files.indexOf(event));
    this.files.splice(this.files.indexOf(event), 1);
  }



}