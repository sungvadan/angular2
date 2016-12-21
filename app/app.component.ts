import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div>
      <label>id: </label>{{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input value="{{hero.name}}" placeholder="name">
    </div>
  `,
})
export class AppComponent {
  
  hero: Hero ={
    id: 1,
    name: 'windstorm'
  }
  title= 'Hello'
}

export class Hero{
  id: number;
  name: string;
}
