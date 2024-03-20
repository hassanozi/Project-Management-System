import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent {

  constructor(private _ProjectService:ProjectService, private _Router:Router){}

  projectForm = new (FormGroup)({
    title :new FormControl(null),
    description :new FormControl(null)
  })


  onSubmit(data:FormGroup){
    console.log(data.value);
    this._ProjectService.onAddProject(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:()=>{

      },complete:()=>{
        this._Router.navigate(['/dashboard/manager/projects'])
      }
    })
  }


}
