import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private sessionItems: { name: string; value: string }[] = [
    { name: 'Token_ID', value: UUID.UUID() },
    { name: 'JSESSION_ID', value: UUID.UUID() },
    { name: 'Login_Time', value: new Date(Date.now()).toLocaleString() },
    { name: 'Login_Duration', value: (0).toString() },
    { name: 'Language', value: 'en-us' },
  ];

  constructor() {
    this.sessionItems.forEach((item: { name: string; value: string }) =>
      sessionStorage.setItem(item.name, item.value)
    );

    setInterval(() => this.updateLoginTime('Login_Duration'), 1000);
  }

  private updateLoginTime(name: string): void {
    sessionStorage.setItem(name, this.addSecond(name));
  }

  private addSecond(name: string): string {
    return (parseInt(sessionStorage.getItem(name) as string) + 1).toString();
  }
}
