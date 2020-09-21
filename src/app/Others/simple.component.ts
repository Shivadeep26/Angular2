import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    template:`Your have entered: {{userInput}}`
})

export class SimpleComponent implements OnChanges{
    @Input()
    userInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for(let propertyName in changes){
            var change = changes[propertyName];
            var currentValue = JSON.stringify(change.currentValue);
            var previousValue = JSON.stringify(change.previousValue);
            console.log(propertyName + ": currentValue" + currentValue + "previousValue:" + previousValue);
        }
    }
}