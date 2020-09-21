import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    pageHeader: string = 'Employee Details';
    imgPath: string = 'https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-garden-gnomes-2018-6753651837108770-s.png';
    isDisabled: boolean = false;

    firstName: string = 'Tom';
    lastName: string = 'Jerry';
    classToApply: string = 'italicClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;
    fontSize: number = 30;
    name: string = 'Tom';

    stringEntered: string = 'Shivadeep';

    getFullName():string {
        return this.firstName + " " + this.lastName;
    }

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass:this.applyItalicClass

        }
        return classes;
    }

    addStyles() {
        let styles = {
            'font-weight': this.applyBoldClass ? 'bold' : 'normal',
            'font-size.px':this.fontSize
        }
        return styles;
    }

    onClick(): void {
        alert('Clicked');
    }
}