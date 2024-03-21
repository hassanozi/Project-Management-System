import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit{
 
  tableResponse:any;
  tableData:any[]=[];

  constructor(private _ProjectService:ProjectService,private dialog:MatDialog, private _ToastrService:ToastrService){}
  
  ngOnInit(): void {
    this.getAllProjects()
  }

  deleteProject(projectId:any){
    this._ProjectService.onDeleteProject(projectId).subscribe({
      next:(res) => {
        console.log(res);
      },error:()=>{

      },complete:()=> {
          this.getAllProjects();
          this._ToastrService.info('Deleted Successfuly')
      },
    })
  }
  openDeleteProjectDialog(projectData:any){
    console.log(projectData)
    const dialogRef = this.dialog.open(DeleteProjectComponent, {
      data:projectData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.deleteProject(result);
        
      }
    });
  }

  getAllProjects(){

    let paramData = {
      pageSize : 10,
      pageNumber : 1

    }

    this._ProjectService.getAllProjects(paramData).subscribe({
      next:(res)=>{
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data;
      }
    })
  }
}
