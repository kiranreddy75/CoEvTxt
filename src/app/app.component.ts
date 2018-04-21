import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfApplicants = [{
    title: 'Sai Kiran',
    address: 'Kent,Ohio',
    phone: '9999966666',
  },
];

}
