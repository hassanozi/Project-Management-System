import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../service/current-user.service';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { TasksService } from '../../../manager/services/tasks.service';
import { UsersService } from '../../../manager/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  testChart: any = [];
  userData: any;
  country: string = '';
  creationDate: any;
  modificationDate: any;
  email: string = '';
  roleInSystem: string = '';
  imagePath: string = '';
  phoneNumber: number = 0;
  userName: string = '';
  completImage: string = 'https://upskilling-egypt.com/';
  notFoundRecipes: string = '../../../../assets/images/avatar.png';
  message: string = '';

  tasksCounter: any;
  userCounter: any = [];
  chart: any = [];
  newChart: any = [];
  allDataNewChart: any = [];

  // *SECTION
  // activatedEmployee: number = this.userCounter.activatedEmployeeCount;
  // NotActivatedEmployee: number = this.userCounter.deactivatedEmployeeCount;
  // allEmployee: number = this.userCounter.activatedEmployeeCount + this.userCounter.deactivatedEmployeeCount;
  activatedEmployee: any;
  NotActivatedEmployee: any;
  allEmployee: any;
  constructor(private _CurrentUserService: CurrentUserService, private _TasksService: TasksService, private _UsersService: UsersService) { }

  ngOnInit(): void {
    this.showChartsData();
    this.getUserInfo();
    this.userCount();
    this.allDataInfo();
  }

  showChartsData() {
    this._TasksService.getTasksCount().subscribe({
      next: (response) => {
        console.log(response);
        this.tasksCounter = response; // Assign response to tasksCounter
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: ['To Do', 'In Progress', 'Done'],
            datasets: [{
              label: 'Data info about tasks Count',
              data: [this.tasksCounter?.toDo, this.tasksCounter?.inProgress, this.tasksCounter?.done],
              backgroundColor: ['#d8cfbe', '#ef9b28', '#0e3826'],
              hoverOffset: 4
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });
  }


  getUserInfo() {
    this._CurrentUserService.currentUser().subscribe({
      next: (response) => {
        console.log(response);
        this.userData = response;
        this.userName = response.userName;
        this.country = response.country;
        this.roleInSystem = response.group.name;
        this.email = response.email;
        this.imagePath = response.imagePath;
        this.phoneNumber = response.phoneNumber;
        this.creationDate = response.creationDate;
        this.modificationDate = response.modificationDate;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  userCount() {
    this._UsersService.getUserCount().subscribe({
      next: (respones) => {
        console.log(respones)
        this.userCounter = respones;
        this.activatedEmployee = respones.activatedEmployeeCount;
        console.log(this.activatedEmployee);
        this.NotActivatedEmployee = respones.deactivatedEmployeeCount;
        this.allEmployee = respones.activatedEmployeeCount + respones.deactivatedEmployeeCount;
      }, error: (error) => {
        console.log(error)
      }, complete: () => {
        this.newChart = new Chart('newCanvas', {
          type: 'bar',
          data: {
            labels: ['Activated Employee Count', 'No Activated Employee Count'],
            datasets: [{
              label: 'Employee statuse',
              data: [this.userCounter.activatedEmployeeCount, this.userCounter.deactivatedEmployeeCount],
              backgroundColor: [
                '#0e3826',
                '#d8cfbe'
              ],
              borderColor: [
                '#0e3826',
                '#d8cfbe'
              ],
              borderWidth: 2
            }]
          },
          options: {
            elements: {
              line: {
                borderWidth: 3
              }
            }
          },
        });
      }
    })
  }

  // fill:any;

  allDataInfo() {
    console.log(this.allEmployee);

    this.allDataNewChart = new Chart('allData', {
      type: 'radar',
      data: {
        labels: ['activated Employee', 'No activated Employee', 'All Employee'],
        datasets: [{
          label: 'Employee statuse',
          data: [this.activatedEmployee,
          this.NotActivatedEmployee,
          this.allEmployee],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
    });
  }

}
