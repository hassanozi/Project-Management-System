import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _HttpClient: HttpClient) { }

  getManagerTasks(param: any): Observable<any> {
    return this._HttpClient.get('Task/manager', { params: param })
  }

  onAddTasks(data: FormGroup): Observable<any> {
    return this._HttpClient.post('Task', data)
  }

  getTasksById(id: number): Observable<any> {
    return this._HttpClient.get(`Task/${id}`)
  }



}
