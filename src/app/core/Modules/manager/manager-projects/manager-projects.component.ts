import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit{
 
  tableResponse:any;
  tableData:any[]=[];

  constructor(private _ProjectService:ProjectService){}
  
  ngOnInit(): void {
    this.getAllProjects()
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
