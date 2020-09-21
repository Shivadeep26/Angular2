"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.imgPath = 'https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-garden-gnomes-2018-6753651837108770-s.png';
        this.isDisabled = false;
        this.firstName = 'Tom';
        this.lastName = 'Jerry';
        this.classToApply = 'italicClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicClass = true;
        this.fontSize = 30;
        this.name = 'Tom';
        this.stringEntered = 'Shivadeep';
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-weight': this.applyBoldClass ? 'bold' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    };
    AppComponent.prototype.onClick = function () {
        alert('Clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map