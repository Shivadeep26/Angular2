import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/toPromise";

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {}

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("https://localhost:44376/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(code: string): Observable<IEmployee> {
        return this._http.get("https://localhost:44376/api/employees/" + code)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError)
    }

    handlePromiseError(error: Response): void {
        console.log(error);
         throw (error);
    }

    handleError(error:Response) {
        console.error(error);
        return Observable.throw(error);
    }
}