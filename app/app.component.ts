import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{ appName }}</h1>'
})
export class AppComponent {
    constructor() {
        this.appName = 'My First Angular 2 App';
    }
}