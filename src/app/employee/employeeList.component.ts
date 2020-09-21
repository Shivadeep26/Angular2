import { Component ,OnInit} from '@angular/core';
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    
})

export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];

    selectedEmployeeCountRadioButtonValue: string = 'All';
    statusMessage: string = 'Loading data... Please wait!';

    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
         this._employeeService.getEmployees()
             .subscribe((employeeData) => this.employees = employeeData,
                 (error) => {
                     this.statusMessage = 'Problem while loading the service';
                     console.error(error);
                 });
    }

    getEmployees(): void {
        this.employees = [
            { Code: 'emp101', Name: 'A', Gender: 'Male', Salaray: '10' },
            { Code: 'emp102', Name: 'B', Gender: 'Male', Salaray: '20' },
            { Code: 'emp103', Name: 'C', Gender: 'Male', Salaray: '30' },
            { Code: 'emp104', Name: 'D', Gender: 'Female', Salaray: '40' },
            { Code: 'emp105', Name: 'E', Gender: 'Female', Salaray: '50' }
        ]
    }

    trackByEmpCode(index: number, employee: any):string {
        return employee.Code;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.Gender === 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.Gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonChange:string): void {
        this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonChange;
    }
}