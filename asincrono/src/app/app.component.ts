import { Component } from '@angular/core';
import { Info } from './components/info.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Info[]=[
    {
      name: 'enrique',
      lastName: 'palomino',
      age: 25
    }
  ]

  agregar(event:Event){
    event.preventDefault()
    console.log(this.users)
  }

}
