"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButtonValue = 'All';
        this.statusMessage = 'Loading data... Please wait!';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Problem while loading the service';
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { Code: 'emp101', Name: 'A', Gender: 'Male', Salaray: '10' },
            { Code: 'emp102', Name: 'B', Gender: 'Male', Salaray: '20' },
            { Code: 'emp103', Name: 'C', Gender: 'Male', Salaray: '30' },
            { Code: 'emp104', Name: 'D', Gender: 'Female', Salaray: '40' },
            { Code: 'emp105', Name: 'E', Gender: 'Female', Salaray: '50' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.Code;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.Gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.Gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonChange) {
        this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonChange;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map