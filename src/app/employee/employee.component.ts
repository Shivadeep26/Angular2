import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/retry';
import 'rxjs/Subscription';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls : ['app/employee/employee.component.css']
})

export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading'
    empcode: string

    subscription: ISubscription;

    constructor(private _employeeservice: EmployeeService, private _activatedRoutes: ActivatedRoute, private _route: Router) {
    }

    onBackButtonClick(): void {
        this._route.navigate(['/employees']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = "Request Cancelled";
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        let empcode :string = this._activatedRoutes.snapshot.params['code'];

       this.subscription= this._employeeservice.getEmployeeByCode(empcode)
            .retryWhen((err) => {
                return err.scan((returnCount) => {
                    returnCount += 1;
                    if (returnCount < 6) {
                        this.statusMessage = "Retrying....Attempt #" + returnCount;
                        return returnCount;
                    } else {
                        throw (err);
                    }
                },0).delay(1000)
            })
            .subscribe((employeeData) => this.employee = employeeData,
        (error) => {
            this.statusMessage = 'Problem while loading the service';
            console.error(error);
        });
            
    }
}