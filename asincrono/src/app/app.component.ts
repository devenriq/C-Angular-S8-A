import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Info } from './components/info.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Info[]=[

  ]

  users={
    name: 'enrique',
    lastName: 'Palomino',
    age: 25
  }

  agregar(event:Event){
    if (this.users.name.trim().length===0 && this.users.lastName.trim().length===0) {
      return
    }

    this.people.push(this.users)

    this.users={
      name:'',
      lastName:'',
      age:0
    }
  }

}
