import { Component } from '@angular/core';
import { ApiTestComponent } from '../components/api-test/api-test.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ApiTestComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
