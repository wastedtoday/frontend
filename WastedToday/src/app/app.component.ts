import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AfAuthService } from './af-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any>;
  writeOnly: FirebaseListObservable<any>;
  constructor(private af: AngularFire, private afAuthService: AfAuthService) {
    this.items = this.af.database.list('/items');
  }

  add() {

    this.writeOnly = this.af.database.list('/writeOnly/items/' + this.afAuthService.user.uid)

    this.writeOnly.push({
      hours: 1,
      thing: 'ReactJS',
      description: 'test'
    });
  }
}
