import { LightningElement } from 'lwc';
export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblazer';
    //currentDate = new Date().toTimeString();
    get currentDate() {
      return new Date().toTimeString();
    }
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}
