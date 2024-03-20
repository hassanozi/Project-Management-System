import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProjects(param:any):Observable<any>{
    return this._HttpClient.get('Project',{params:param})
  }

  onAddProject(data : FormGroup):Observable<any>{
    return this._HttpClient.post('Project',data)
  }

}
