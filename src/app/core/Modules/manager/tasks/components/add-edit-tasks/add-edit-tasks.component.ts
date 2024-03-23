import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProjectById } from '../../../models/projects';
import { ProjectService } from '../../../services/project.service';
import { TasksService } from '../../../services/tasks.service';
import { ITasks } from '../../../models/tasks';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent {


  // constructor(private _ProjectService: ProjectService, private _Router: Router) { }
  TasksById: ITasks | any;
  viewUserId: number = 0;
  urlPath: any;

  constructor(private _ProjectService: ProjectService, private _TasksService: TasksService, private _Router: Router, private _ActivatedRoute: ActivatedRoute, private _ToastrService: ToastrService) {
    this.viewUserId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.viewUserId)

  }

  ngOnInit(): void {
    if (this.viewUserId > 0) {
      this.getTasksById(this.viewUserId);
    }
  }


  TasksForm = new (FormGroup)({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })


  onSubmit(data: FormGroup) {
    console.log(data.value);
    this._TasksService.onAddTasks(data.value).subscribe({
      next: (res) => {
        console.log(res);
      }, error: () => {
        this._ToastrService.error('error in this process')
      }, complete: () => {
        this._Router.navigate(['/core/dashboard/manager/tasks']);
        this._ToastrService.success('Operation Accomplished Successfully')

      }
    })
  }



  getTasksById(id: number) {
    this._TasksService.getTasksById(id).subscribe({
      next: (response) => {
        console.log(response)
        this.TasksById = response;
        console.log(this.TasksById)
      }, error: (error) => {
        // this._ToastrService.error('error in edit process')
      }, complete: () => {
        this.TasksForm.patchValue({
          title: this.TasksById.title,
          description: this.TasksById.description
        });
        // this._ToastrService.success('edit process success')

      }
    })
  }
}
