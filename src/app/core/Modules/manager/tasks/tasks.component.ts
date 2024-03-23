import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {


  taskTable: any;
  tasks: any[] = [];

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent?: PageEvent;
  searchkey: string = '';

  constructor(private _TasksService: TasksService, private dialog: MatDialog, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    this.getAllTasks();
  }


  // deleteProject(projectId: any) {
  //   this._ProjectService.onDeleteProject(projectId).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }, error: () => {

  //     }, complete: () => {
  //       this.getAllProjects();
  //       this._ToastrService.info('Deleted Successfuly')
  //     },
  //   })
  // }
  // openDeleteProjectDialog(projectData: any) {
  //   console.log(projectData)
  //   const dialogRef = this.dialog.open(DeleteProjectComponent, {
  //     data: projectData
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result)
  //     if (result) {
  //       this.deleteProject(result);

  //     }
  //   });
  // }

  getAllTasks() {
    let paramData = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex,
      title: this.searchkey
    }
    this._TasksService.getManagerTasks(paramData).subscribe({
      next: (res) => {
        console.log(res);
        this.taskTable = res;
        this.tasks = res.data;
      }
    })
  }

}
