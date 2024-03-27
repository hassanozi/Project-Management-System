import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  todo:any[]=[];
  inprogress:any[]=[];
  done:any[]=[];
  taskList:any[]=[];
  taskData:any;
  constructor(private _EmployeeService:EmployeeService){}
  ngOnInit(): void {
    this.getAllTasks();
      
  }
  getAllTasks(){
    let param = {
      pageSize:10,
      pageNumber:1

    }
    this._EmployeeService.getAllTasks(param).subscribe({
      next:(res)=>{
        console.log(res)
        this.taskData=res;
        this.taskList=res.data;

        this.todo = this.taskList.filter(x=>x.status == 'ToDo')
        this.inprogress = this.taskList.filter(x=>x.status == 'InProgress')
        this.done = this.taskList.filter(x=>x.status == 'Done')
        

      },
      error:(res)=>{
        
      },
      complete:()=>{

      }
    })
  }
  todo1 = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done1 = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
