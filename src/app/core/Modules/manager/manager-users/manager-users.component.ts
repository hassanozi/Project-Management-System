import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ConfirmBlockUserComponent } from './components/confirm-block-user/confirm-block-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrls: ['./manager-users.component.scss']
})
export class ManagerUsersComponent implements OnInit{
  tableResponse:any;
  userTable:any;
  users :any[]=[];


  constructor(private _UsersService:UsersService,private dialog:MatDialog, private _ToastrService:ToastrService){}

  ngOnInit(): void {
      this.getAllUsers();
  }

  getAllUsers(){
    let paramData = {
      pageSize :10,
      pageNumber :1

    }
    this._UsersService.getUsers(paramData).subscribe({
      next:(res)=>{
        console.log(res);
        this.userTable = res
        this.users = res.data
      }

    })
  }
  openConfirmBlockDialog(userData:any){
    console.log(userData)
    const dialogRef = this.dialog.open(ConfirmBlockUserComponent, {
      data:userData
    });

    dialogRef.afterClosed().subscribe(result=> {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.onToggleBlockUser(result);
        
      }
    });
  }


  onToggleBlockUser(id:number){
    this._UsersService.onToggleActivate(id).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:()=>{

      },
      complete:()=>{
        this.getAllUsers();
        this._ToastrService.success('Status Changed Successfuly')
      }
    })
  }


}
