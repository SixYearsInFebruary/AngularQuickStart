import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//We import the two things we need to launch the application.
//1. Angular's browser bootstrap function.
//2. The application root component, AppComponent.
//Then we call bootstrap with AppComponent
//Bootstrapping is platform-specific
//Notice that we import the bootstrap function from angular2/platform/browser, not angular2/core
//Bootstrapping isn't core because there isn't single way to bootstrap the app. True, most applications that run
//in a browser call the bootstrap function from this history.
//But it is possible to load a component in a different environment. We might load it on a mobile device with Apache Cordova or NativeScript.
//We might wish to render the first page of our application on the server to import launch performance of facilitate SEO.
//These targets require a different kind of bootstrap function that we'd import from a different library.
//Why create a separate main.ts file?
//The main.ts file is tiny. This is just a QuickStart. 
//We could have folded its few lines into the app.component file and spared ourselves some complexity.
//We'd rather demonstrate the proper way to structure an Angular application. App bootstrapping is a separate concern from presenting a view.
//Mixing concerns creates difficulties down the road. We might launch the AppComponent in multiple environments with different bootstrapppers.
//Testing the component is much easier if it doesn's alse try to run the entire application.

bootstrap(AppComponent);
