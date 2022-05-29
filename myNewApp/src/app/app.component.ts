
import { Component } from '@angular/core';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myType = 'PieChart';
  myData = [
    ['PHP', 8136000],
    ['Node', 8538000],
    ['JQuery', 2244000],
    ['.Net', 3470000],
    ['Java', 19500000]
  ];
  
  width = 550;
  height = 400;
}