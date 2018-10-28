import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  isActive =true;
  fullName = 'Luiz Vicente Preste';

  constructor() { }

  ngOnInit() {
  }
  saveEmployee(empform: NgForm): void{
    console.log(empform);
  }
}
