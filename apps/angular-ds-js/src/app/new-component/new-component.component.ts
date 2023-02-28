import { Component } from '@angular/core';
import "@dscla/ds-pagination";

@Component({
  selector: 'app-pagination-componet',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {
  
  clickFunction() {
    alert('holasd!');
  }  
}
