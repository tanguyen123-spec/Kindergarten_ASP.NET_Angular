import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doan_62131842FE';
  handleClick() {
    console.log('Đã click!');
  }
}
