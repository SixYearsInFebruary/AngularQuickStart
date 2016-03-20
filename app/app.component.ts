import {Component} from 'angular2/core';
//@Component decorator
//Component is a decorator function that takes a metadata object. The metadata tell Angular how to create and use this component.
//We apply this function to the component class by prefixing the function with the @ sysbol and invoking it with the
//metadata object just above the class:
//This particular metadata object has two fields, a selector and a template.
//The selector specifies a simple CSS selector for an HTML element that represents the component.
//The element for this component is named my-app. Angular create and displays an instance of our AppComponent wherever it encounters a my-app elements in the host HTML.
//The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.
//Our template is a single line of HTML announing "My first Angular App"
//A more advanced template could contain data building to component properties and might identify other application components which have their own template. These templates
//might identify yet other components. In this way an Angular application becomes a tree of components.
//Component Class
//At the bottom of the file is an empty, do-nothing class named AppComponent
//When we're ready to build a substantive application, we can expand this class properties and application logic. Our AppComponent class is empty because we don't need it to 
//do anything in this QuickStart.
//We export AppComponent so that we can import it elsewhere in our application, as we'll see when we create main.ts
@Component({
    selector: 'my-app',
    template: '<h1>My Second Angular 2 App</h1>'
})
export class AppComponent { }
